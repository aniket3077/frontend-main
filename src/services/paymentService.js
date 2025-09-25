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

  // Helper function to check if date is September 25 or 26, 2025 (DHAMAKA days)
  isDhamakaSpecialDate(bookingDate) {
    if (!bookingDate) return false;
    
    const date = new Date(bookingDate);
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based, so September = 8
    const day = date.getDate();
    
    // Check if it's September 25 or 26, 2025
    return year === 2025 && month === 8 && (day === 25 || day === 26);
  }

  // 🎉 Calculate pricing based on pass type and duration - Date-specific pricing for Sep 25-26
  calculatePricing(passType, passDuration, numTickets, bookingDate = null, ticketBreakdown = null) {
    // Check if booking date is September 25 or 26, 2025
    const isDhamakaDate = this.isDhamakaSpecialDate(bookingDate);
    
    // Regular pricing structure
    const regularPricing = {
      daily: {
        female: { base: 399 },      // 👩 Female – ₹399
        couple: { base: 699 },      // 👫 Couple – ₹699
        kids: { base: 99 },         // 🧒 Kids – ₹99
        family: { base: 1300 },     // 👨‍👩‍👧‍👦 Family – ₹1300
        male: { base: 499 }         // 👨 Male – ₹499
      },
      season: {
        female: { base: 2499 },     // 👩 Female Season – ₹2499
        couple: { base: 3499 },     // 👫 Couple Season – ₹3499
        family: { base: 5999 },     // 👨‍👩‍👧‍👦 Family Season – ₹5999
        kids: { base: 999 },        // 🧒 Kids Season Pass – ₹999
        male: { base: 2999 }        // 👨 Male Season – ₹2999
      }
    };

    // DHAMAKA pricing for Sep 25-26 (only for daily passes)
    const dhamakaPricing = {
      daily: {
        female: { base: 99 },       // 👩 Female – ₹99 (DHAMAKA RATE!)
        couple: { base: 249 },      // 👫 Couple – ₹249 (DHAMAKA RATE!)
        kids: { base: 99 },         // 🧒 Kids – ₹99 (DHAMAKA RATE!)
        family: { base: 499 },      // 👨‍👩‍👧‍👦 Family – ₹499 (DHAMAKA RATE!)
        male: { base: 199 }         // 👨 Male – ₹199 (DHAMAKA RATE!)
      },
      season: regularPricing.season // Season pass prices remain unchanged
    };

    // Choose pricing based on date and pass type
    const pricing = (isDhamakaDate && passDuration === 'daily') ? dhamakaPricing : regularPricing;

    const priceObj = pricing[passDuration]?.[passType] || pricing.daily?.[passType];
    if (!priceObj) return { basePrice: 0, finalPrice: 0, totalAmount: 0, discountApplied: false };
    
    const quantity = Math.max(1, parseInt(numTickets) || 1);
    
    // Fixed pricing - no bulk discounts
    let pricePerTicket = priceObj.base;
    let discountApplied = false;
    
    // If ticket breakdown is provided, calculate based on all tickets
    if (ticketBreakdown) {
      let totalAmount = 0;
      
      // Calculate for each ticket type
      Object.entries(ticketBreakdown).forEach(([type, count]) => {
        const typePrice = pricing[passDuration]?.[type] || pricing.daily?.[type];
        if (!typePrice || count <= 0) return;
        
        const typeQuantity = parseInt(count);
        const unitPrice = typePrice.base;
        
        totalAmount += unitPrice * typeQuantity;
      });
      
      return {
        basePrice: totalAmount,
        finalPrice: totalAmount,
        totalAmount: totalAmount,
        discountApplied: false,
        pricePerTicket: 0 // Not applicable for mixed bookings
      };
    }

    // Calculate total amount for single pass type
    const totalAmount = pricePerTicket * quantity;

    return {
      basePrice: priceObj.base,
      finalPrice: pricePerTicket,
      totalAmount: totalAmount,
      discountApplied: false,
      discountAmount: 0,
      pricePerTicket: pricePerTicket,
      quantity: quantity
    };
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
