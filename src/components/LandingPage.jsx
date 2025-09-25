import React from "react";
import { useNavigate } from "react-router-dom";

// Centralized venue location config (can be reused elsewhere)
const VENUE_LOCATION = {
  name: 'Regal Lawns & Hall',
  lat: 19.8503503,
  lng: 75.3499744,
  // Pre-encoded query string for Google Maps search producing a red marker with label
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Regal+Lawns+%26+Hall+19.8503503,75.3499744',
  // Simple fallback (also works): `https://www.google.com/maps?q=Regal+Lawns+%26+Hall+19.8503503,75.3499744`
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/debuvwpnt/video/upload/v1758289731/mlcyupycc2lz0i3syirl.mp4"
          poster="/images/dandiya-poster.jpg"
          onError={(e) => {
            // Fallback: hide video if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <img src="https://res.cloudinary.com/debuvwpnt/image/upload/v1758299018/y5pprsys3kn5xbdxvi6u.png" alt="Malang Ras Dandiya" className="mx-auto w-40 mb-6" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Malang Raas Dandiya 2025</h1>
            <p className="text-xl mb-6">Chh. Sambhaji Nagar's Biggest Navratri Celebration</p>
            <button
              onClick={() => navigate("/booking")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition duration-300"
            >
              Book Tickets Now
            </button>
          </div>
        </div>
      </div>



      {/* Event Details */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">Event Details</h3>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center gap-2"><span role="img" aria-label="calendar">📅</span> 23 September 2025</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="clock">⏰</span> 7:00 PM onwards</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="location">📍</span> Chh. Sambhaji Nagar</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="money">💰</span> Starting from ₹99</li>
          </ul>
        </div>
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          <span className="inline-block animate-gradient-x">Event Highlights</span>
        </h2>
        <p className="text-lg text-center mb-10 text-gray-700 font-medium">
          Join us for the most spectacular Dandiya celebration of the year. Experience traditional dance, modern music, and unforgettable memories.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-pink-100 hover:via-yellow-100 hover:to-green-100 hover:shadow-2xl cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">💃</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">Live Dandiya & Garba</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Experience traditional dances with professional groups.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-yellow-100 hover:via-blue-100 hover:to-green-100 hover:shadow-2xl cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🎵</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">Live Music</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Live dhol, DJ, and Bollywood beats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-green-100 hover:via-pink-100 hover:to-yellow-100 hover:shadow-2xl cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🎁</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">Exciting Prizes</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Win in Dandiya King & Queen contests.</p>
          </div>
        </div>
        {/* Special Group Offer - moved here */}
        <div className="mt-8 flex flex-col items-center">
          <div className="bg-gradient-to-r from-yellow-200 via-orange-100 to-pink-100 border-l-4 border-yellow-400 rounded shadow px-6 py-3 max-w-xl w-full text-center animate-bounce relative mb-4">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md border-2 border-white z-10" style={{letterSpacing:'0.05em'}}>SPECIAL OFFER</div>
            <span className="text-lg font-bold text-orange-700 tracking-wide">
              👥 Buy 6 or more tickets  <span className="text-green-700">& pay just ₹350/person</span>
            </span>
          </div>
          {/* Group Discount Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm px-8 py-4 w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-2 text-lg mb-2">
            <span className="text-blue-900 font-medium text-center sm:text-left">Get special discounts on group bookings. Contact:</span>
            <span className="flex flex-row items-center gap-3 ml-2">
              <a href="tel:9172788397" className="text-blue-700 hover:text-blue-900" title="Call">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-8 h-8 inline align-middle">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25h-1.386a1.875 1.875 0 01-1.318-.545l-2.272-2.272a1.875 1.875 0 01-.545-1.318V7.5A2.25 2.25 0 0012 5.25H9.75A2.25 2.25 0 007.5 7.5v.75z" />
                </svg>
              </a>
              <a href="https://wa.me/9172788397" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 inline align-middle">
                  <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.67 6.09L0 24l6.18-1.62A12.09 12.09 0 0016 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a10.13 10.13 0 01-5.19-1.43l-.37-.22-3.67.96.98-3.58-.24-.37A10.13 10.13 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </a>
              <span className="text-blue-900 font-bold text-xl ml-2 whitespace-nowrap">+91 9172788397</span>
            </span>
          </div>
        </div>
      </div>

      {/* 🔥 DHAMAKA OFFER BANNER - Top Highlight */}
      <div className="max-w-7xl mx-auto mb-8 px-4">
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-2xl shadow-2xl p-6 text-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-3">
              <span className="text-4xl mr-2">🔥</span>
              <h2 className="text-3xl font-extrabold">DHAMAKA RATES!</h2>
              <span className="text-4xl ml-2">🔥</span>
            </div>
            <p className="text-xl font-bold mb-4">💥 ONLY on September 25-26, 2025!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl mb-1">👩</div>
                <div className="font-bold">Female</div>
                <div className="text-2xl font-extrabold">₹99</div>
                <div className="text-sm opacity-80">was ₹399</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl mb-1">👨</div>
                <div className="font-bold">Male</div>
                <div className="text-2xl font-extrabold">₹199</div>
                <div className="text-sm opacity-80">was ₹699</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl mb-1">👫</div>
                <div className="font-bold">Couple</div>
                <div className="text-2xl font-extrabold">₹249</div>
                <div className="text-sm opacity-80">was ₹699</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-2xl mb-1">👨‍👩‍👧‍👦</div>
                <div className="font-bold">Family</div>
                <div className="text-2xl font-extrabold">₹499</div>
                <div className="text-sm opacity-80">was ₹1599</div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold animate-bounce mb-2">⚡ Don't Miss Out - Book Now!</p>
              {/* Simple countdown display */}
              <div className="bg-black/20 rounded-lg px-4 py-2 inline-block">
                <p className="text-sm font-bold">⏰ Valid until September 26, 11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Pricing */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          <span className="inline-block animate-gradient-x">Ticket Pricing</span>
        </h2>

        {/* Event Meta */}
        <div className="flex flex-col items-center gap-2 mb-10 text-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">📅 23 September, 7pm onwards</span>
            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-medium">🗓 Only on 23rd September</span>
            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">📍 Regal Lawns, Near Deolai Chowk, Beed Bypass, Chhatrapati Sambhajinagar</span>
          </div>
        </div>

  <div className="grid md:grid-cols-2 gap-8 justify-center">

    {/* Entry Tickets */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-lg w-full mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Entry Tickets</h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex items-center justify-between border-b py-2">
          <span>👩 Female</span>
          <span className="font-semibold">₹399</span>
        </li>
        <li className="flex items-center justify-between border-b py-2">
          <span>👫 Couple</span>
          <span className="font-semibold">₹699</span>
        </li>
        <li className="flex items-center justify-between border-b py-2">
          <span>🧒 Kids (6 to 12 yrs)</span>
          <span className="font-semibold">₹99</span>
        </li>
        <li className="flex items-center justify-between border-b py-2">
          <span>👨‍👩‍👧‍👦 Family (4 members)</span>
          <span className="font-semibold">₹1300</span>
        </li>
        <li className="flex items-center justify-between py-2">
          <span>👨 Male <span className="text-xs text-red-600 font-bold ml-2">(Stag Male Are Not Allowed)</span></span>
          <span className="font-semibold text-red-600">₹499</span>
        </li>
      </ul>
      
      {/* September 23rd Special Pricing Note */}
      <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-pink-100 rounded-lg border border-green-200">
        <p className="text-sm font-bold text-green-700 mb-1">🎉 September 23rd Special!</p>
        <p className="text-xs text-gray-700">
          <span className="text-green-600 font-semibold">Female tickets: Only ₹1</span><br/>
          <span className="text-pink-600 font-semibold">Couple tickets: Only ₹249</span><br/>
          <span className="text-blue-600 font-semibold">Male tickets: Only ₹249</span>
        </p>
      </div>

      {/* DHAMAKA OFFER - September 25-26 */}
      <div className="mt-3 p-4 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-lg border-2 border-red-300 shadow-lg animate-pulse">
        <div className="flex items-center justify-center mb-2">
          <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">🔥 DHAMAKA RATES!</span>
        </div>
        <p className="text-sm font-bold text-red-700 mb-1 text-center">💥 September 25-26 ONLY!</p>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <span className="text-red-600 font-bold">👩 Female: ₹99</span>
          <span className="text-red-600 font-bold">👨 Male: ₹199</span>
          <span className="text-red-600 font-bold">👫 Couple: ₹249</span>
          <span className="text-red-600 font-bold">👨‍👩‍👧‍👦 Family: ₹499</span>
        </div>
        <p className="text-center text-xs text-orange-700 font-semibold mt-2">⚡ Limited Time Offer!</p>
      </div>
      
      {/* No general note here, only on booking card */}
    </div>

    {/* Season Pass Details */}
    <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-yellow-100 max-w-lg w-full mx-auto flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-4 text-yellow-700 flex items-center gap-2">
        <span role="img" aria-label="ticket">🎫</span> Season Pass (All 8 Days)
      </h3>
      <ul className="space-y-3 text-gray-700 text-base">
        <li className="flex items-center justify-between border-b py-2"><span>👩 Female</span><span className="font-semibold">₹2499</span></li>
        <li className="flex items-center justify-between border-b py-2"><span>👫 Couple</span><span className="font-semibold">₹3499</span></li>
        <li className="flex items-center justify-between border-b py-2"><span>🧒 Kids (6 to 12 yrs)</span><span className="font-semibold">₹792</span></li>
        <li className="flex items-center justify-between border-b py-2"><span>👨‍👩‍👧‍👦 Family (4 members)</span><span className="font-semibold">₹5999</span></li>
        <li className="flex items-center justify-between py-2">
          <span>👨 Male</span>
          <span className="font-semibold text-red-600">₹3992 (Not Allowed)</span>
        </li>
      </ul>
      <p className="text-sm text-yellow-700 mt-3">Valid for all 8 days. <span className="font-semibold">Best value for regulars!</span></p>
          </div>
        </div>
        {/* Venue Map */}
        <div className="bg-gray-200 p-6 rounded-lg shadow mt-10">
          {/* Clickable Google Map preview */}
          <div className="relative group w-full h-[250px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7542083029725!2d75.3499744!3d19.850350299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba27a8820d35b%3A0x8ba350e85183604b!2sRegal%20Lawns%20%26%20Hall!5e0!3m2!1sen!2sin!4v1756382969521!5m2!1sen!2sin-"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Regal Lawns & Hall Map"
              className="absolute inset-0 w-full h-full pointer-events-none group-hover:opacity-90 transition-opacity duration-300"
            ></iframe>
            {/* Overlay button to capture click and open full Google Maps */}
            <button
              type="button"
              aria-label={`Open ${VENUE_LOCATION.name} on Google Maps`}
              onClick={() => window.open(VENUE_LOCATION.mapsSearchUrl, '_blank', 'noopener,noreferrer')}
              className="absolute inset-0 w-full h-full cursor-pointer outline-none focus:ring-4 focus:ring-orange-400/60"
            >
              <span className="sr-only">Open on Google Maps</span>
            </button>
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium text-gray-700 shadow group-hover:bg-white transition-colors">
              Click to open in Google Maps
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default LandingPage;