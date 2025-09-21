import React from "react";
import logo11 from "../assets/logo11.png";
const Footer = () => {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 items-start">
              <img
                src="https://res.cloudinary.com/debuvwpnt/image/upload/v1758299018/y5pprsys3kn5xbdxvi6u.png"
                alt="Malang Ras Dandiya Logo"
                className="w-14 h-14 rounded-lg shadow mb-2 sm:mb-0"
              />
              <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent drop-shadow-sm ml-0 sm:ml-2">Malang Ras Dandiya 2025</span>
            </div>
            <p className="text-gray-600 text-sm">
              Chh.Sambhaji Nagar Biggest Navratri carnival with live Dandiya, Garba, music, and cultural celebrations.
            </p>
          </div>
          {/* Event Details */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Event Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>23 August 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕰️</span>
                <span>7:00 PM onwards</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Venue: Regal Lawns, Beed Bypass, Chhatrapati Sambhajinagar Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💰</span>
                <span>Starting from ₹99</span>
              </div>
            </div>
          </div>
          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🎵</span>
                <span>Live DJ & Dhol</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💃</span>
                <span>Dandiya & Garba</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎁</span>
                <span>Exciting Prizes</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        
        {/* Policy Links */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="/about-us" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              About Us
            </a>
            <a href="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Terms & Conditions
            </a>
            <a href="/pricing-policy" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Pricing Policy
            </a>
            <a href="/cancellation-refund-policy" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Cancellation & Refund
            </a>
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © 2025 Malang Ras Dandiya. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-500">
            <span>Service provide by FARMSEASY TECH SOLUTIONS PVT LTD</span>
            <span className="hidden sm:inline">•</span>
            <span>Secure Payments</span>
            <span className="hidden sm:inline">•</span>
            <span>Digital Tickets</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;