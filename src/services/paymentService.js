const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://backend-main-production-ef63.up.railway.app';

class PaymentService {
  // Load Razorpay script dynamically
  loadRazorpayScript() {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Razorpay script'));
      document.head.appendChild(script);
    });
  }

  // Create payment order
  async createPaymentOrder(orderData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bookings/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to create payment order');
      }

      return data.order;
    } catch (error) {
      console.error('Create payment order error:', error);
      throw error;
    }
  }

  // Verify payment
  async verifyPayment(paymentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bookings/confirm-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Verify payment error:', error);
      throw error;
    }
  }

  // Get payment status
  async getPaymentStatus(paymentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/payments/status/${paymentId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get payment status error:', error);
      throw error;
    }
  }

  // Calculate pricing based on pass type and duration - with discount support
  calculatePricing(passType, passDuration, numTickets, bookingDate = null, ticketBreakdown = null) {
    const pricing = {
      daily: {
        female: 5,
        couple: 5, // Updated from 699 to match frontend
        kids: 5,
        family: 5, // Updated from 1300 to match frontend
        male: 5 // Added male pricing
      },
      season: {
        female: 5, // Updated from 2499 to match frontend
        couple: 5,
        family: 5,
        kids: 5, // Added kids season pricing
        male: 5 // Added male season pricing
      }
    };

    const prices = pricing[passDuration] || pricing.daily;
    const basePrice = prices[passType] || 0;
    
    // If ticket breakdown is provided, calculate based on all tickets with discounts
    if (ticketBreakdown) {
      let totalAmount = 0;
      
      // Check for bulk discount (6+ male+female tickets for single/daily)
      const maleCount = ticketBreakdown.male || 0;
      const femaleCount = ticketBreakdown.female || 0;
      const bulkEligible = passDuration === 'daily' && (maleCount + femaleCount) >= 6;
      
      // Check for female discount on Sept 23rd
      const isFemaleDiscountDay = bookingDate === "2025-09-23";
      
      Object.entries(ticketBreakdown).forEach(([type, count]) => {
        const typePrice = prices[type] || 0;
        let unitPrice = typePrice;
        
        // Apply discounts
        if (type === 'female' && passDuration === 'daily' && isFemaleDiscountDay) {
          // 50% off for female on Sept 23
          unitPrice = Math.floor(typePrice / 2);
        } else if (bulkEligible && (type === 'male' || type === 'female')) {
          // Bulk discount for male/female
          unitPrice = 5;
        }
        
        totalAmount += unitPrice * count;
      });
      
      return totalAmount;
    }

    // Original logic for single pass type
    // For couple pass, price is fixed for 2 people
    if (passType === 'couple') {
      return basePrice;
    }

    // For family pass, calculate per member price
    if (passType === 'family') {
      const pricePerMember = basePrice / 4; // Base price is for 4 members
      return Math.round(pricePerMember * numTickets);
    }

    // For other pass types, multiply by number of tickets
    return basePrice * numTickets;
  }

  // Validate payment data
  validatePaymentData(bookingData) {
    const requiredFields = ['id', 'pass_type', 'pass_duration', 'num_tickets', 'total_amount'];
    
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate pass type
    const validPassTypes = ['female', 'couple', 'kids', 'family', 'male']; // Added 'male'
    if (!validPassTypes.includes(bookingData.pass_type)) {
      throw new Error(`Invalid pass type: ${bookingData.pass_type}`);
    }

    // Validate pass duration
    const validDurations = ['daily', 'season', 'single']; // Added 'single' as alias for 'daily'
    if (!validDurations.includes(bookingData.pass_duration)) {
      throw new Error(`Invalid pass duration: ${bookingData.pass_duration}`);
    }

    // Validate ticket quantity
    if (bookingData.num_tickets < 1) {
      throw new Error('Number of tickets must be at least 1');
    }

    // Validate couple pass quantity
    if (bookingData.pass_type === 'couple' && bookingData.num_tickets !== 2) {
      throw new Error('Couple pass must be for exactly 2 people');
    }

    // Validate family pass quantity
    if (bookingData.pass_type === 'family' && (bookingData.num_tickets < 1 || bookingData.num_tickets > 4)) {
      throw new Error('Family pass must be for 1-4 members');
    }

    // Validate amount - use enhanced calculation if breakdown is available
    let expectedAmount;
    if (bookingData.ticket_breakdown && bookingData.booking_date) {
      // Use enhanced pricing with discounts
      expectedAmount = this.calculatePricing(
        bookingData.pass_type,
        bookingData.pass_duration,
        bookingData.num_tickets,
        bookingData.booking_date,
        bookingData.ticket_breakdown
      );
    } else {
      // Fallback to original calculation
      expectedAmount = this.calculatePricing(
        bookingData.pass_type,
        bookingData.pass_duration,
        bookingData.num_tickets
      );
    }

    console.log('🔧 PaymentService: Expected amount:', expectedAmount, 'Got:', bookingData.total_amount);
    
    if (Math.abs(bookingData.total_amount - expectedAmount) > 1) {
      throw new Error(`Amount mismatch. Expected: ₹${expectedAmount}, Got: ₹${bookingData.total_amount}. Breakdown: ${JSON.stringify(bookingData.ticket_breakdown || 'N/A')}`);
    }

    return true;
  }

  // Format currency - returns amount with ₹ symbol
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  }
  
  // Format amount without currency symbol - for manual ₹ symbol placement
  formatAmount(amount) {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
    }).format(amount);
  }

  // Debug helper - calculate and log pricing breakdown
  debugPricingCalculation(bookingData) {
    console.log('🔧 PaymentService Debug - Booking data:', bookingData);
    
    if (bookingData.ticket_breakdown && bookingData.booking_date) {
      const expectedAmount = this.calculatePricing(
        bookingData.pass_type,
        bookingData.pass_duration,
        bookingData.num_tickets,
        bookingData.booking_date,
        bookingData.ticket_breakdown
      );
      console.log('🔧 Enhanced pricing calculation:', expectedAmount);
      console.log('🔧 Ticket breakdown:', bookingData.ticket_breakdown);
      console.log('🔧 Booking date:', bookingData.booking_date);
    }
    
    const basicAmount = this.calculatePricing(
      bookingData.pass_type,
      bookingData.pass_duration,
      bookingData.num_tickets
    );
    console.log('🔧 Basic pricing calculation:', basicAmount);
    console.log('🔧 Frontend sent amount:', bookingData.total_amount);
    
    return {
      enhanced: bookingData.ticket_breakdown ? this.calculatePricing(
        bookingData.pass_type,
        bookingData.pass_duration,
        bookingData.num_tickets,
        bookingData.booking_date,
        bookingData.ticket_breakdown
      ) : null,
      basic: basicAmount,
      frontend: bookingData.total_amount
    };
  }

  // Get pass type display name
  getPassTypeDisplayName(passType, passDuration) {
    const displayNames = {
      daily: {
        female: 'Female Daily Pass',
        couple: 'Couple Daily Pass',
        kids: 'Kids Daily Pass',
        family: 'Family Daily Pass'
      },
      season: {
        female: 'Female Season Pass',
        couple: 'Couple Season Pass',
        family: 'Family Season Pass'
      }
    };

    return displayNames[passDuration]?.[passType] || `${passType} ${passDuration} pass`;
  }
}

export const paymentService = new PaymentService();
