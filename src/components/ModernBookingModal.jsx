import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModernBookingModal = () => {
  // Show loading overlay after payment, before confirmation
  const [showConfirmationLoading, setShowConfirmationLoading] = useState(false);

  // Helper: show loading bar for 2 seconds before showing confirmation
  const showConfirmationWithDelay = () => {
    setShowConfirmationLoading(true);
    setTimeout(() => {
      setShowConfirmationLoading(false);
      setStep(4);
    }, 2000); // 2 seconds loading
  };
  // Removed isOpen state, always show booking form
  const [step, setStep] = useState(1);
  const [bookingId, setBookingId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });
  // Toast helper
  const showToast = (message, duration = 3000) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), duration);
  };
  // Track count for each pass type
  const [ticketData, setTicketData] = useState({
    booking_date: "",
    passes: {
      female: 0,
      male: 0,
      couple: 0,
      kids: 0,
      family: 0,
    },
  });

  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const apiBase = (import.meta.env && import.meta.env.VITE_API_BASE_URL) || "https://backend-main-production-ef63.up.railway.app"; // fallback to Railway API

  console.log('🔧 Debug: apiBase =', apiBase);
  console.log('🔧 Debug: import.meta.env =', import.meta.env);

  // 🎉 Malang Raas Dandiya 2025 - Updated Pricing Structure (Matches Backend)
  const [ticketType, setTicketType] = useState('single'); // 'single' or 'season'
  
  const TICKET_PRICING = {
    // 🎟 Single Day Entry Tickets
    single: {
      female: { base: 399 },      // 👩 Female – ₹399
      couple: { base: 699 },       // 👫 Couple – ₹699
      kids: { base: 99 },          // 🧒 Kids (6-12 yrs) – ₹99
      family: { base: 1300 },     // 👨‍👩‍👧‍👦 Family (4 members) – ₹1300
      male: { base: 499 }         // 👨 Male – ₹499 (Stag Male Not Allowed)
    },
    // 🔥 Season Pass Tickets (All 8 Days)
    season: {
      female: { base: 2499 },     // 👩 Female Season – ₹2499
      couple: { base: 3499 },     // 👫 Couple Season – ₹3499
      family: { base: 5999 },     // 👨‍👩‍👧‍👦 Family Season – ₹5999
      kids: { base: 999 },         // 🧒 Kids Season Pass
      male: { base: 2999 }        // 👨 Male Season (though not allowed)
    }
  };

  // Helper: September 23rd female discount
  const isFemaleDiscountDay = ticketData.booking_date === "2025-09-23";

  const labelMap = {
    single: {
      female: 'Female - ₹399',
      couple: 'Couple - ₹699',
      kids: 'Kids (6-12 yrs) - ₹99',
      family: 'Family (4 members) - ₹1300',
      male: 'Male - ₹499 (Stag Male Are Not Allowed)'
    },
    season: {
      female: 'Season Pass - Female (8 Days) - ₹2499',
      couple: 'Season Pass - Couple (8 Days) - ₹3499',
      family: 'Season Pass - Family (4) (8 Days) - ₹5999',
      kids: 'Season Pass - Kids (8 Days) - ₹999',
      male: 'Season Pass - Male (8 Days) - ₹2999 (Stag Male Are Not Allowed)'
    }
  };

  // Calculate pricing for all pass types - with bulk discounts and female discount
  const calculatePrice = () => {
    let totalAmount = 0;
    let discountApplied = false;
    let savings = 0;
    let details = [];
    
    // Expand passes to get actual ticket count (similar to backend logic)
    const expandedPasses = { ...ticketData.passes };
    
    // Expand family passes: 1 family = 2 male + 2 female
    if (expandedPasses.family > 0) {
      const familyCount = expandedPasses.family;
      expandedPasses.male = (expandedPasses.male || 0) + (familyCount * 2);
      expandedPasses.female = (expandedPasses.female || 0) + (familyCount * 2);
      delete expandedPasses.family; // Remove family after expansion
    }
    
    // Expand couple passes: 1 couple = 1 male + 1 female
    if (expandedPasses.couple > 0) {
      const coupleCount = expandedPasses.couple;
      expandedPasses.male = (expandedPasses.male || 0) + coupleCount;
      expandedPasses.female = (expandedPasses.female || 0) + coupleCount;
      delete expandedPasses.couple; // Remove couple after expansion
    }
    
    // Calculate total tickets after expansion for bulk discount eligibility
    const totalTickets = Object.values(expandedPasses).reduce((sum, count) => sum + (Number(count) || 0), 0);
    const isBulkDiscount = totalTickets >= 6;
    
    // Process original passes for pricing (before expansion)
    Object.entries(ticketData.passes).forEach(([type, count]) => {
      count = Number(count) || 0;
      if (!count) return;

      const pricing = TICKET_PRICING[ticketType]?.[type];
      if (!pricing) return;

      let unitPrice = pricing.base;
      let originalPrice = pricing.base;
      let typeDiscount = 0;

      // Female ticket logic
      if (type === 'female' && ticketType === 'single') {
        if (isFemaleDiscountDay) {
          // On 23rd Sep, female tickets are FREE
          unitPrice = 0;
          typeDiscount = pricing.base * count;
          discountApplied = true;
          savings += typeDiscount;
        } else if (isBulkDiscount) {
          // Bulk offer for female from 24th Sep onwards
          unitPrice = 350;
          typeDiscount = (pricing.base - 350) * count;
          discountApplied = true;
          savings += typeDiscount;
        }
      } else if (type === 'couple' && ticketType === 'single') {
        if (isFemaleDiscountDay) {
          // On 23rd Sep, couple tickets are ₹299
          unitPrice = 299;
          typeDiscount = (pricing.base - 299) * count;
          discountApplied = true;
          savings += typeDiscount;
        }
        // No bulk discount for couples
      } else if (type === 'male' && ticketType === 'single') {
        if (isFemaleDiscountDay) {
          // On 23rd Sep, male tickets are ₹249
          unitPrice = 249;
          typeDiscount = (pricing.base - 249) * count;
          discountApplied = true;
          savings += typeDiscount;
        } else if (isBulkDiscount) {
          // Bulk discount for male any day
          unitPrice = 350;
          typeDiscount = (pricing.base - 350) * count;
          discountApplied = true;
          savings += typeDiscount;
        }
      }
      // No bulk discount for couple/family/kids

      totalAmount += unitPrice * count;
      details.push({ type, count, unitPrice, originalPrice, typeDiscount });
    });
    
    // For display purposes, calculate a representative price based on selected tickets
    let displayUnitPrice = 0;
    let displayOriginalPrice = 0;
    
    if (totalTickets > 0) {
      if (isBulkDiscount) {
        displayUnitPrice = 350;
        // Use weighted average for original price display
        let totalOriginalValue = 0;
        Object.entries(ticketData.passes).forEach(([type, count]) => {
          count = Number(count) || 0;
          if (!count) return;
          const pricing = TICKET_PRICING[ticketType]?.[type];
          if (pricing) {
            totalOriginalValue += pricing.base * count;
          }
        });
        displayOriginalPrice = Math.round(totalOriginalValue / totalTickets);
      } else {
        // Use weighted average for display prices
        let totalOriginalValue = 0;
        Object.entries(ticketData.passes).forEach(([type, count]) => {
          count = Number(count) || 0;
          if (!count) return;
          const pricing = TICKET_PRICING[ticketType]?.[type];
          if (pricing) {
            totalOriginalValue += pricing.base * count;
          }
        });
        
        displayUnitPrice = Math.round(totalAmount / totalTickets);
        displayOriginalPrice = Math.round(totalOriginalValue / totalTickets);
      }
    } else {
      // Default to female pricing when no tickets selected
      const femalePrice = TICKET_PRICING[ticketType]?.female?.base || 399;
      displayUnitPrice = isFemaleDiscountDay ? 0 : femalePrice; // FREE on September 23rd
      displayOriginalPrice = femalePrice;
    }
    
    return { 
      totalAmount, 
      discountApplied, 
      savings, 
      details, 
      isFemaleDiscountDay,
      bulkEligible: isBulkDiscount, // Now properly calculated
      totalTickets,
      unitPrice: displayUnitPrice,
      finalPrice: displayUnitPrice,
      originalPrice: displayOriginalPrice
    };
  };

  const priceInfo = calculatePrice();

  const handleTicketSubmit = async () => {

    // Check if any tickets are selected
    const { female = 0, male = 0, couple = 0, kids = 0, family = 0 } = ticketData.passes;
    const totalTickets = [female, male, couple, kids, family].reduce((sum, count) => sum + (Number(count) || 0), 0);

    if (ticketType === 'season') {
      // For season pass, only allow female, couple, family, and do not require date
      if (female + couple + family === 0) {
        showToast("Please select at least one season pass type (female, couple, or family)");
        return;
      }
    } else {
      // Restriction: 1 or more male not allowed unless with female, family, or couple
      if (male > 0 && female === 0 && family === 0 && couple === 0) {
        showToast("Male tickets must be booked with at least one female, family, or couple ticket.", 4000);
        return;
      }
      // Restriction: 1 or more kids not allowed unless with female, family, or couple
      if (kids > 0 && female === 0 && family === 0 && couple === 0) {
        showToast("Kids tickets must be booked with at least one female, family, or couple ticket.", 4000);
        return;
      }
      if (!ticketData.booking_date || totalTickets === 0) {
        showToast("Please select date and number of tickets");
        return;
      }
    }

    setLoading(true);
    try {
      const bookingUrl = `${apiBase}/api/bookings/create`;
      console.log('🔧 Debug: Calling booking URL:', bookingUrl);

      // Convert the new passes structure to work with current backend
      const passesToBook = Object.entries(ticketData.passes).filter(([type, count]) => count > 0);

      if (passesToBook.length === 0) {
        showToast("Please select at least one ticket");
        return;
      }

      // Calculate total tickets and find primary pass type (highest count)
      const totalTickets = Object.values(ticketData.passes).reduce((sum, count) => sum + (Number(count) || 0), 0);
      const primaryPass = passesToBook.reduce((max, [type, count]) => 
        count > max.count ? { type, count } : max, 
        { type: passesToBook[0][0], count: passesToBook[0][1] }
      );

      // For season pass, send today's date as booking_date to satisfy backend
      const getTodayDate = () => {
        const d = new Date();
        return d.toISOString().slice(0, 10);
      };
      
      // Use our calculated total amount
      const totalAmount = priceInfo.totalAmount;
      
      const payload = {
        booking_date: ticketType === 'season' ? getTodayDate() : ticketData.booking_date,
        num_tickets: totalTickets, // Send total tickets instead of just first type
        pass_type: primaryPass.type, // Send primary pass type
        ticket_type: ticketType,
        total_amount: totalAmount, // Add total amount for backend validation
        pass_duration: ticketType === 'season' ? 'season' : 'daily', // Map ticket_type to pass_duration
        // Send passes object for backend multiple pass type handling
        passes: Object.fromEntries(passesToBook),
        // Keep ticket_breakdown for compatibility
        ticket_breakdown: Object.fromEntries(passesToBook)
      };
      console.log('🔧 Debug: Payload:', payload);
      console.log('🔧 Debug: Frontend calculated amount:', totalAmount);
      console.log('🔧 Debug: Ticket breakdown:', Object.fromEntries(passesToBook));

      const res = await axios.post(bookingUrl, payload);
      if (res.data.success) {
        setBookingId(res.data.booking.id);
        setStep(2);
      } else {
        showToast("Failed to create booking");
      }
    } catch (err) {
      console.error('Booking creation error:', err);
      console.error('Error response:', err.response);
      console.error('Error message:', err.message);

      if (err.response?.data?.code === 'NO_DATABASE') {
        showToast("Service temporarily unavailable. Database connection required for booking. Please contact support.");
      } else if (err.response?.data?.message) {
        showToast(`Error: ${err.response.data.message}`);
      } else if (err.response?.status) {
        showToast(`Server error (${err.response.status}): ${err.response.statusText || 'Unknown error'}`);
      } else if (err.code === 'NETWORK_ERROR' || err.message.includes('Network Error')) {
        showToast("Network error: Please check your internet connection and ensure the backend server is running on port 5000");
      } else {
        showToast(`API error: ${err.message || "couldn't create booking"}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUserSubmit = async () => {
    if (!userData.name || !userData.email || !userData.phone) {
  showToast("Please fill all user details");
      return;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else if (!userData.email.endsWith("@gmail.com")) {
      setEmailError("Only @gmail.com email addresses are allowed");
      return;
    } else {
      setEmailError("");
    }
    if (!/^\d{10}$/.test(userData.phone)) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    } else {
      setPhoneError("");
    }
    setLoading(true);
    try {
      const res = await axios.post(`${apiBase}/api/bookings/add-users`, {
        booking_id: bookingId,
        ...userData,
      });
      if (res.data.success) {
        setStep(3);
      } else {
  showToast("Failed to add user details");
      }
    } catch (err) {
      console.error(err);
  showToast("API error: couldn't add user details");
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Send expected amount for validation to ensure frontend-backend-Razorpay consistency
      const orderRes = await axios.post(`${apiBase}/api/bookings/create-payment`, {
        booking_id: bookingId,
        expected_amount: priceInfo.totalAmount,
        userEmail: userData.email,
        userName: userData.name,
      });

      const { order, emailSent } = orderRes.data;

      // If email was sent directly (bypassing payment), go to confirmation
      if (emailSent) {
        showConfirmationWithDelay();
        return;
      }

      // Otherwise, proceed with Razorpay payment flow
      const ok = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
  if (!ok) return showToast("Failed to load Razorpay SDK");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Malang Ras Dandiya 2025",
        description: `Booking for ${getTotalTickets()} ${getDisplayLabel()}`,

        image: 'https://malangevents.com/images/dandiya-logo.png',
        prefill: { name: userData.name, email: userData.email, contact: userData.phone },
        handler: async function (response) {
          try {
            const confirmRes = await axios.post(`${apiBase}/api/bookings/confirm-payment`, {
              booking_id: bookingId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            if (confirmRes.data.success) {
              showConfirmationWithDelay();
            } else {
              showToast("Payment confirmed but failed at backend");
            }
          } catch (err) {
            console.error(err);
            showToast("Error confirming payment");
          }
        },
        theme: { color: "#e11d48" },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment creation error:', err);
      
      // Handle specific error cases
      if (err.response?.status === 500) {
        if (err.response.data?.error?.includes('Razorpay')) {
          showToast("Payment system temporarily unavailable. Please try again later or contact support.");
        } else {
          showToast("Server error occurred while creating payment. Please try again.");
        }
      } else if (err.response?.status === 401) {
  showToast("Payment authentication failed. Please contact support.");
      } else if (err.response?.data?.error) {
  showToast(`Payment Error: ${err.response.data.error}`);
      } else if (err.message) {
  showToast(`Error: ${err.message}`);
      } else {
  showToast("Error creating payment order");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setBookingId(null);
    setTicketData({ 
      booking_date: "", 
      passes: {
        female: 0,
        male: 0,
        couple: 0,
        kids: 0,
        family: 0,
      },
    });
    setUserData({ name: "", email: "", phone: "" });
    // Removed setIsOpen(false) as isOpen is not defined in this component
  };

  // Helper functions to work with the new passes structure
  const getSelectedPassInfo = () => {
    const passesWithTickets = Object.entries(ticketData.passes).filter(([type, count]) => count > 0);
    if (passesWithTickets.length === 0) return { passType: 'female', ticketCount: 0 };
    
    // Return the first pass type with tickets (for compatibility with old API)
    const [passType, ticketCount] = passesWithTickets[0];
    return { passType, ticketCount };
  };

  const getTotalTickets = () => {
    // Use same expansion logic as calculatePrice
    const expandedPasses = { ...ticketData.passes };
    
    // Expand family passes: 1 family = 2 male + 2 female
    if (expandedPasses.family > 0) {
      const familyCount = expandedPasses.family;
      expandedPasses.male = (expandedPasses.male || 0) + (familyCount * 2);
      expandedPasses.female = (expandedPasses.female || 0) + (familyCount * 2);
      delete expandedPasses.family;
    }
    
    // Expand couple passes: 1 couple = 1 male + 1 female
    if (expandedPasses.couple > 0) {
      const coupleCount = expandedPasses.couple;
      expandedPasses.male = (expandedPasses.male || 0) + coupleCount;
      expandedPasses.female = (expandedPasses.female || 0) + coupleCount;
      delete expandedPasses.couple;
    }
    
    return Object.values(expandedPasses).reduce((sum, count) => sum + (Number(count) || 0), 0);
  };

  const getDisplayLabel = () => {
    const { passType } = getSelectedPassInfo();
    return labelMap[ticketType][passType] || passType;
  };

  // Get detailed ticket breakdown for confirmation display
  const getTicketBreakdown = () => {
    const breakdown = [];
    const priceInfo = calculatePrice();
    
    Object.entries(ticketData.passes).forEach(([type, count]) => {
      count = Number(count) || 0;
      if (!count) return;
      
      const detail = priceInfo.details.find(d => d.type === type);
      if (detail) {
        const label = labelMap[ticketType][type] || type;
        breakdown.push({
          type,
          label: label.split(' - ')[0], // Get just the pass type without price
          count,
          unitPrice: detail.unitPrice,
          originalPrice: detail.originalPrice,
          hasDiscount: detail.unitPrice !== detail.originalPrice
        });
      }
    });
    
    return breakdown;
  };

  return (
    <div className="max-w-md mx-auto py-4 px-4 relative">
      {/* Dedicated loading page after payment, before confirmation */}
      {showConfirmationLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
          <div className="w-24 h-24 flex items-center justify-center mb-6">
            <svg className="animate-spin w-16 h-16 text-orange-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-orange-500 mb-2">Finalizing your booking...</div>
          <div className="text-gray-600 text-sm">Please wait while we confirm your payment and generate your tickets.</div>
        </div>
      ) : (
        <div>
          {/* Toast Popup */}
          {toast.show && (
            <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg text-base font-semibold animate-fade-in-out transition-all duration-300">
              {toast.message}
            </div>
          )}
          <div className="flex justify-between items-center mb-6">
          {/* <h2 className="text-center text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Book Your Dandiya Pass</h2> */}
          </div>

        {/* Book your ticket */}
        {step === 1 && (
          <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-red-50 min-h-screen px-4 py-6">
            <div className="w-full max-w-xs bg-white rounded-lg shadow p-3 mx-auto border border-gray-100 mt-10">
              {/* Header */}
              <div className="text-center mb-3">
                <div className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full mb-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-1">
                  Book Your Ticket
                </h3>
                <p className="text-gray-600 text-xs mb-4">Malang Raas Dandiya 2025 • Sep 23 - Oct 1</p>

                {/* Bulk Discount Banner */}
                <div className="bg-gradient-to-r from-yellow-200 to-pink-100 rounded-lg shadow flex items-center justify-center relative mb-3 mt-6 py-2 px-3">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow border-2 border-white" style={{letterSpacing:'0.04em'}}>SPECIAL OFFER</span>
                  <span className="flex items-center text-lg font-bold">
                    <svg className="w-6 h-6 mr-2 text-purple-800" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.08 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    <span className="text-orange-700">Buy 6 or more tickets</span>
                    <span className="text-green-700 ml-2">& pay just ₹350/person</span>
                  </span>
                  {isFemaleDiscountDay && ticketType === 'single' && (
                    <span className="block w-full text-center text-green-600 text-xs font-semibold mt-2">* On 23rd September, female tickets are FREE, couple tickets are ₹299, and male tickets are ₹249.</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                {/* Ticket Duration */}
                <div className="space-y-1">
                  <label className="flex items-center text-gray-800 font-semibold text-xs">
                    <svg className="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Ticket Duration
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (ticketType !== 'single') {
                          setTicketType('single');
                          // Reset counts when switching to single to avoid season carryover
                          setTicketData({
                            booking_date: '',
                            passes: { female: 0, male: 0, couple: 0, kids: 0, family: 0 },
                            pass_type: 'female'
                          });
                        }
                      }}
                      className={`w-full rounded-lg transition-colors duration-150 min-h-[52px] px-4 py-3 border text-center ${
                        ticketType === 'single'
                          ? 'bg-pink-50 text-pink-700 border-pink-300'
                          : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <div className={`font-semibold ${ticketType === 'single' ? 'text-pink-800' : 'text-gray-800'} text-sm`}>Single Day</div>
                        <div className={`${ticketType === 'single' ? 'text-pink-700/80' : 'text-gray-500'} text-xs`}>One event day</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (ticketType !== 'season') {
                          setTicketType('season');
                          // Reset counts when switching to season to avoid single carryover
                          setTicketData({
                            booking_date: '', // not used for season
                            passes: { female: 0, male: 0, couple: 0, kids: 0, family: 0 },
                            pass_type: 'female'
                          });
                        }
                      }}
                      className={`w-full rounded-lg transition-colors duration-150 min-h-[52px] px-4 py-3 border text-center ${
                        ticketType === 'season'
                          ? 'bg-pink-50 text-pink-700 border-pink-300'
                          : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <div className={`font-semibold ${ticketType === 'season' ? 'text-pink-800' : 'text-gray-800'} text-sm`}>Season Pass</div>
                        <div className={`${ticketType === 'season' ? 'text-pink-700/80' : 'text-gray-500'} text-xs`}>All 9 days</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Event Date (only for Single Day) */}
                {ticketType === 'single' && (
                  <div className="space-y-1">
                    <label className="flex items-center text-gray-800 font-semibold text-xs mb-1">
                      <svg className="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      Choose date and time
                    </label>
                    <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-2 py-2 overflow-x-auto">
                      <div className="flex flex-col items-center mr-2">
                        <span className="bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold tracking-widest mb-1" style={{writingMode:'vertical-rl',letterSpacing:'0.1em'}}>SEP</span>
                      </div>
                      {[
                        { day: 23, dow: 'Tue' },
                        { day: 24, dow: 'Wed' },
                        { day: 25, dow: 'Thu' },
                        { day: 26, dow: 'Fri' },
                        { day: 27, dow: 'Sat' },
                        { day: 28, dow: 'Sun' },
                        { day: 29, dow: 'Mon' },
                        { day: 30, dow: 'Tue' },
                        // October 1st
                        { day: 1, dow: 'Wed', month: 'oct' },
                      ].map(({ day, dow, month }) => {
                        const dateStr = month === 'oct' ? `2025-10-0${day}` : `2025-09-${day.toString().padStart(2,'0')}`;
                        const selected = ticketData.booking_date === dateStr;
                        return (
                          <button
                            key={month === 'oct' ? `oct${day}` : day}
                            type="button"
                            onClick={() => setTicketData({ ...ticketData, booking_date: dateStr })}
                            className={`flex flex-col items-center justify-center w-10 h-12 rounded-lg mx-0.5 px-0.5 py-1 text-xs font-semibold border transition-all duration-100 ${selected ? 'bg-white text-black border-white shadow' : 'bg-gray-900 text-white border-gray-700 hover:bg-gray-800'}`}
                          >
                            <span className="text-[13px] font-bold mb-0.5">{day}</span>
                            <span className="text-[10px] font-medium">{dow}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Pass Type - show all with plus/minus */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-800 font-semibold text-sm mb-2">
                    <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Pass Type
                  </label>
                  <div className="space-y-1">
                    {Object.entries(labelMap[ticketType]).map(([key, label]) => {
                      // For season pass, only allow female, couple, family
                      if (ticketType === 'season' && !['female', 'couple', 'family'].includes(key)) return null;
                      
                      return (
                        <div key={key} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 mb-1 border border-gray-200">
                          <span className="font-medium text-gray-700 text-sm">
                            {key === 'female' && ticketType === 'single' && isFemaleDiscountDay ? (
                              <>
                                <span>Female</span>
                                <span className="ml-2 text-xs">
                                  <span className="line-through text-gray-400">₹399</span>
                                  <span className="text-green-600 font-bold ml-1">FREE</span>
                                  <span className="text-green-600 font-semibold ml-1">(100% OFF)</span>
                                </span>
                              </>
                            ) : key === 'couple' && ticketType === 'single' && isFemaleDiscountDay ? (
                              <>
                                <span>Couple</span>
                                <span className="ml-2 text-xs">
                                  <span className="line-through text-gray-400">₹699</span>
                                  <span className="text-pink-600 font-bold ml-1">₹299</span>
                                  <span className="text-pink-600 font-semibold ml-1">(57% OFF)</span>
                                </span>
                              </>
                            ) : key === 'male' && ticketType === 'single' && isFemaleDiscountDay ? (
                              <>
                                <span>Male</span>
                                <span className="ml-2 text-xs">
                                  <span className="line-through text-gray-400">₹399</span>
                                  <span className="text-blue-600 font-bold ml-1">₹249</span>
                                  <span className="text-blue-600 font-semibold ml-1">(37% OFF)</span>
                                </span>
                              </>
                            ) : label}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setTicketData(prev => ({
                                ...prev,
                                passes: { ...prev.passes, [key]: Math.max(0, (prev.passes[key] || 0) - 1) }
                              }))}
                              className="w-8 h-8 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 flex items-center justify-center"
                            >
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/></svg>
                            </button>
                            <span className="w-6 text-center font-bold text-gray-800">{ticketData.passes[key]}</span>
                            <button
                              type="button"
                              onClick={() => setTicketData(prev => ({
                                ...prev,
                                passes: { ...prev.passes, [key]: (prev.passes[key] || 0) + 1 }
                              }))}
                              className="w-8 h-8 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 flex items-center justify-center"
                            >
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Number of Tickets - handled per pass type above */}

                {/* Price Preview - show breakdown for each pass type */}
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-3 border border-pink-100">
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-600 text-sm mb-1">Total Amount</div>
                    {priceInfo.details.map(({ type, count, unitPrice, originalPrice, typeDiscount }) => (
                      count > 0 && (
                        <div key={type} className="flex justify-between items-center text-xs text-gray-700">
                          <span>{labelMap[ticketType][type]} <span className="font-bold">× {count}</span></span>
                          <span>
                            {typeDiscount > 0 && (
                              <span className="line-through text-gray-400 mr-1">₹{originalPrice * count}</span>
                            )}
                            <span className={typeDiscount > 0 ? "text-green-700 font-bold" : "font-bold"}>₹{unitPrice * count}</span>
                          </span>
                        </div>
                      )
                    ))}
                    <div className="border-t border-orange-200 my-2"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-base font-bold text-gray-700">Grand Total</span>
                      <span className="text-xl font-extrabold text-gray-900">₹{priceInfo.totalAmount}</span>
                    </div>
                    {/* September 23rd special discount message */}
                    {priceInfo.isFemaleDiscountDay && ticketType === 'single' && (
                      <div className="text-green-600 text-xs font-semibold mt-1">🎉 September 23rd Special: Female tickets FREE, Couple tickets only ₹299, Male tickets only ₹249!</div>
                    )}
                    {/* Bulk discount applied message */}
                    {priceInfo.bulkEligible && (
                      <div className="text-green-600 text-xs font-semibold mt-1">💰 Bulk Discount Applied: All tickets now just ₹350 each!</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={handleTicketSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 sm:py-3 rounded-lg font-bold text-base sm:text-base shadow-md hover:from-pink-600 hover:to-orange-500 hover:shadow-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Continue to Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}


        {/* personal details */}
        {step === 2 && (
          <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-red-50 min-h-screen px-4 py-8">
            <div className="w-full max-w-xs bg-white rounded-lg shadow p-3 mx-auto border border-gray-100 mt-16">
              {/* Header */}
              <div className="text-center mb-2">
                <div className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full mb-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-xs font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-0.5">
                  Personal Details
                </h3>
                <p className="text-gray-600 text-[10px]">We'll send your tickets to these details</p>
              </div>

              <div className="space-y-2">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="flex items-center text-gray-800 font-semibold text-xs">
                    <svg className="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 focus:outline-none text-gray-700 text-sm bg-white"
                    style={{ WebkitBoxShadow: '0 0 0px 1000px #ffffff inset', WebkitTextFillColor: '#111827' }}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="flex items-center text-gray-800 font-semibold text-xs">
                    <svg className="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={e => {
                      setUserData({ ...userData, email: e.target.value });
                      setEmailError("");
                    }}
                    placeholder="your.email@example.com"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-orange-400 focus:outline-none transition-all duration-150 text-gray-700 text-sm bg-white ${
                      emailError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                    }`}
                    style={{ WebkitBoxShadow: '0 0 0px 1000px #ffffff inset', WebkitTextFillColor: '#111827' }}
                  />
                  {emailError && (
                    <div className="flex items-center text-red-500 text-xs mt-1">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {emailError}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="flex items-center text-gray-800 font-semibold text-xs">
                    <svg className="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-xs">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={userData.phone}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      onChange={e => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setUserData({ ...userData, phone: val });
                        if (val.length === 10) {
                          setPhoneError("");
                        }
                      }}
                      placeholder=""
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-1 focus:ring-orange-400 focus:outline-none transition-all duration-150 text-gray-700 text-sm bg-white ${
                        phoneError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                      }`}
                      style={{ WebkitBoxShadow: '0 0 0px 1000px #ffffff inset', WebkitTextFillColor: '#111827' }}
                    />
                  </div>
                  {phoneError && (
                    <div className="flex items-center text-red-500 text-xs mt-1">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {phoneError}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    We'll send booking confirmation via WhatsApp
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div className="text-blue-800 text-[11px]">
                      <div className="font-semibold mb-1 text-xs">Your information is secure</div>
                      <div>We'll only use these details to send your tickets and event updates. No spam, guaranteed!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-md bg-white hover:bg-gray-50 hover:border-gray-300 font-medium text-sm transition-all duration-150 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                  </svg>
                  Back
                </button>
                <button
                  onClick={handleUserSubmit}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-md font-semibold text-sm shadow-md hover:from-pink-600 hover:to-orange-500 hover:shadow-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Continue to Payment
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 mx-auto">
             
              <h3 className="text-lg text-center  font-bold mb-2 text-gray-800">Order Summary</h3>
              <div className="bg-blue-50 rounded-xl p-5 mb-4">
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  <div className="text-gray-600 font-medium">Event:</div>
                  <div className="text-right font-semibold text-gray-800">Malang Ras Dandiya 2025</div>
                  <div className="text-gray-600 font-medium">Date:</div>
                  <div className="text-right font-semibold text-gray-800">{ticketType === 'season' ? 'Season Pass (All 9 Days)' : ticketData.booking_date}</div>
                  
                  {/* Show each pass type breakdown instead of single "Pass Type" */}
                  <div className="col-span-2 border-t border-gray-200 my-2"></div>
                  <div className="text-gray-600 font-medium col-span-2">Ticket Breakdown:</div>
                  
                  {priceInfo.details.map(({ type, count, unitPrice, originalPrice, typeDiscount }) => (
                    count > 0 && (
                      <React.Fragment key={type}>
                        <div className="text-gray-600 font-medium">{labelMap[ticketType][type]} × {count}:</div>
                        <div className="text-right font-semibold text-gray-800">
                          {typeDiscount > 0 ? (
                            <span>
                              <span className="line-through text-gray-500">₹{originalPrice * count}</span>{' '}
                              <span className="text-green-600 font-bold">₹{unitPrice * count}</span>
                            </span>
                          ) : (
                            `₹${unitPrice * count}`
                          )}
                        </div>
                      </React.Fragment>
                    )
                  ))}

                  {priceInfo.discountApplied && (
                    <>
                      <div className="text-green-600 font-medium">Total Savings:</div>
                      <div className="text-right font-semibold text-green-600">-₹{priceInfo.savings}</div>
                    </>
                  )}

                  <div className="col-span-2 border-t border-gray-200 my-2"></div>
                  <div className="text-lg font-bold text-gray-700">Total:</div>
                  <div className="text-lg font-extrabold text-right text-gray-900">₹{priceInfo.totalAmount}</div>

                </div>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-1">Contact Details:</h5>
                <div className="text-sm text-gray-700">
                  <div>{userData.name}</div>
                  <div>{userData.phone}</div>
                  <div>{userData.email}</div>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg bg-white hover:bg-gray-100 font-semibold transition"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-lg font-semibold shadow-md hover:from-pink-600 hover:to-orange-500 transition duration-300"
                >
                  {loading ? "Processing..." : `Pay Now`}
                </button>
              </div>
            </div>
          </div>
        )}


        {/* booking confirmation */}
          {/* {step === 4 && (
<div className="text-center space-y-6">
<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
<span className="text-3xl">✅</span>
</div>
<h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
<p className="text-gray-600">Your tickets have been sent to your email.</p>
<button onClick={resetBooking} className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition duration-300" >
Book Again
</button>
</div>
)} */}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="flex flex-col items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#bbf7d0"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2.5 2.5L16 9"/></svg>
              </div>
              <h2 className="text-xl font-bold text-green-600 mb-1 flex items-center gap-2">Booking Confirmed! <span>🎉</span></h2>
              <p className="text-green-700 text-sm mb-2">Your tickets have been sent to your email!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
              {/* Booking Details */}
              <div className="bg-white rounded-lg shadow p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-gray-800">Booking Details</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Conf</span>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <div><span className="font-medium">Booking ID:</span> <span className="font-mono">NF{bookingId || '35'}</span></div>
                  <div><span className="font-medium">Payment Status:</span> <span className="text-green-600 font-semibold">Paid</span></div>
                  <div><span className="font-medium">Total Amount:</span> <span className="text-pink-600 font-bold">₹{priceInfo.totalAmount}</span></div>
                </div>
              </div>
              {/* Your Tickets */}
              <div className="bg-white rounded-lg shadow p-3">
                <span className="font-bold text-sm text-gray-800 block mb-2">Your Tickets</span>
                <div className="space-y-1">
                  {getTicketBreakdown().map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between bg-pink-50 rounded px-2 py-1">
                      <span className="font-medium text-gray-700 text-xs">
                        {ticket.label} × {ticket.count}
                      </span>
                      <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded">
                        {ticket.hasDiscount ? (
                          <>
                            <span className="line-through text-gray-400">₹{ticket.originalPrice}</span>
                            {' '}₹{ticket.unitPrice}
                          </>
                        ) : (
                          `₹${ticket.unitPrice}`
                        )}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between bg-green-50 rounded px-2 py-1 border-t border-green-200 mt-2">
                    <span className="font-bold text-gray-800 text-xs">Total Tickets</span>
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">{getTotalTickets()}</span>
                  </div>
                </div>
              </div>
              {/* Customer Info */}
              <div className="bg-white rounded-lg shadow p-3">
                <span className="font-bold text-sm text-gray-800 block mb-2">Customer Information</span>
                <div className="text-xs text-gray-700 space-y-1">
                  <div className="flex items-center gap-2"><span className="bg-pink-100 text-pink-600 rounded-full px-1 py-0.5 font-bold text-xs">👤</span> {userData.name}</div>
                  <div className="flex items-center gap-2"><span className="text-gray-400">📧</span> {userData.email}</div>
                  <div className="flex items-center gap-2"><span className="text-gray-400">📱</span> {userData.phone}</div>
                </div>
              </div>
              {/* Event Info */}
              <div className="bg-white rounded-lg shadow p-3">
                <span className="font-bold text-sm text-gray-800 block mb-2">Event Information</span>
                <div className="text-xs text-gray-700 space-y-1">
                  <div className="flex items-center gap-2"><span className="text-purple-400">📅</span> 23 Sept to 01 Oct, 2025</div>
                  <div className="flex items-center gap-2"><span className="text-orange-400">🕰️</span> 7:00 PM onwards</div>
                  <div className="flex items-center gap-2"><span className="text-green-400">📍</span> Chh. Sambhajinagar, Maharashtra</div>
                </div>
              </div>
            </div>
            {/* Important Notes - Compact */}
            <div className="w-full max-w-2xl mt-4">
              <div className="bg-blue-50 rounded-lg shadow p-3">
                <span className="font-bold text-sm text-blue-700 block mb-2">Important</span>
                <ul className="text-xs text-blue-900 space-y-1">
                  <li>• Carry valid photo ID and e-ticket</li>
                  <li>• Gates open at 4:30 PM</li>
                  <li>• Check email for details</li>
                </ul>
              </div>
            </div>
            <button onClick={resetBooking} className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition duration-300 text-sm mt-3">
Book Again
</button>
          </div>
        )}

        </div>
      )}

      {/* </div> */}
    </div>
  );
};

export default ModernBookingModal;