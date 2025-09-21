import React from 'react';

const PricingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Policy</h1>
          <p className="text-gray-600">Malang Raas Dandiya 2025</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 16, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* Platform Provider Information */}
          <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Platform Provider Information</h2>
            <div className="space-y-3">
              <p className="text-blue-700">
                <strong>Farmseasy Tech Solution Pvt. Ltd.</strong> ("Farmseasy"), through its PaaS (Platform as a Service) platform, 
                provides the online ticket booking system for Malang Event.
              </p>
              <p className="text-blue-700">
                Ticket prices are determined and published by <strong>Malang Event</strong>, the organizer.
              </p>
              <p className="text-blue-700">
                All prices are inclusive of applicable taxes and charges unless stated otherwise.
              </p>
              <p className="text-blue-700">
                <strong>Important:</strong> Farmseasy only provides the technology platform; responsibility for ticket pricing 
                and event execution rests with Malang Event.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing Overview</h2>
            <p className="mb-4">
              Our pricing structure is designed to be fair, transparent, and accessible to all. All prices are listed in Indian Rupees (₹) 
              and are inclusive of applicable taxes and service charges.
            </p>
          </section>

          {/* Current Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Ticket Prices</h2>
            
            {/* September 23rd Special Pricing */}
            <div className="bg-gradient-to-br from-green-50 to-pink-50 p-6 rounded-lg mb-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🎉 September 23rd Special Pricing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👩 Female</span>
                    <span className="font-bold text-green-600">FREE (₹0)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👫 Couple</span>
                    <span className="font-bold text-pink-600">₹299</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>🧒 Kids (6-12 years)</span>
                    <span className="font-bold text-green-600">₹99</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👨‍👩‍👧‍👦 Family (4 members)</span>
                    <span className="font-bold text-green-600">₹1300</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>September 23rd Only:</strong> Female tickets at special price of ₹1! Couple tickets at special price of ₹299. Male tickets at special price of ₹249.
                </p>
              </div>
            </div>
            
            {/* Regular Pricing */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎫 Regular Entry Tickets (September 24 onwards)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👩 Female</span>
                    <span className="font-bold text-green-600">₹399</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👨 Male</span>
                    <span className="font-bold text-red-600">₹499 (Not Allowed)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👫 Couple</span>
                    <span className="font-bold text-green-600">₹699</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>🧒 Kids (6-12 years)</span>
                    <span className="font-bold text-green-600">₹99</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👨‍👩‍👧‍👦 Family (4 members)</span>
                    <span className="font-bold text-green-600">₹1300</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Children under 6 years enter free. Stag males are not allowed entry.
                </p>
              </div>
            </div>

            {/* Season Pass */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">🎫 Season Pass (All 8 Days - Non-Stop Fun!)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👩 Female</span>
                    <span className="font-bold text-green-600">₹2499</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👨 Male</span>
                    <span className="font-bold text-red-600">₹2999 (Not Allowed)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👫 Couple</span>
                    <span className="font-bold text-green-600">₹3499</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>🧒 Kids (6-12 years)</span>
                    <span className="font-bold text-green-600">₹999</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>👨‍👩‍👧‍👦 Family (4 members)</span>
                    <span className="font-bold text-green-600">₹5999</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Best Value:</strong> Season pass provides access to all 8 days of festivities at great savings!
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accepted Payment Methods</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Credit Cards (Visa, MasterCard, American Express)</li>
                  <li>Debit Cards (Visa, MasterCard, RuPay)</li>
                  <li>Net Banking (All major Indian banks)</li>
                  <li>UPI (Google Pay, PhonePe, Paytm, BHIM)</li>
                  <li>Digital Wallets (Paytm, Amazon Pay)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Processing</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All payments are processed securely through Razorpay</li>
                  <li>Payment confirmation is sent via email and SMS</li>
                  <li>Tickets are generated immediately upon successful payment</li>
                  <li>Processing fees may apply for certain payment methods</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Rules */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing Rules & Conditions</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>All prices are final</strong> and include applicable taxes and service charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Dynamic pricing not applicable</strong> - prices remain constant until event date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Group bookings</strong> are welcome with standard pricing for all ticket types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Special offers</strong> cannot be combined unless explicitly stated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Price changes</strong> will be communicated 48 hours in advance (if any)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Currency</strong> - All prices are in Indian Rupees (₹) only</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Age-Based Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Age-Based Pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Age Group</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Under 6 years</td>
                    <td className="border border-gray-300 px-4 py-2">Child</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">FREE</td>
                    <td className="border border-gray-300 px-4 py-2">Must be accompanied by adult</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">6-12 years</td>
                    <td className="border border-gray-300 px-4 py-2">Kids</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">₹100</td>
                    <td className="border border-gray-300 px-4 py-2">Must be accompanied by adult</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">13+ years</td>
                    <td className="border border-gray-300 px-4 py-2">Adult</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">₹100</td>
                    <td className="border border-gray-300 px-4 py-2">Valid ID required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Price Guarantee */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Price Guarantee</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🛡️</span>
                <h3 className="text-xl font-semibold text-blue-800">Our Price Promise</h3>
              </div>
              <ul className="space-y-2 text-blue-700">
                <li>✅ No hidden charges or surprise fees</li>
                <li>✅ Transparent pricing with all taxes included</li>
                <li>✅ Price protection - no price increases after booking</li>
                <li>✅ Equal treatment - same price for same ticket type</li>
                <li>✅ Clear pricing structure and categories</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing Questions?</h2>
            <p className="mb-4">
              If you have any questions about our pricing structure or payment options, please don't hesitate to contact us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Event Organizer (Malang Event)</h3>
                <div className="space-y-1">
                  <p><strong>Email:</strong> support@farmseasy.in</p>
                  <p><strong>Phone:</strong> +91 9172788397</p>
                  <p><strong>WhatsApp:</strong> +91 9172788397</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">For pricing, event details, and policies</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Technology Support (Farmseasy)</h3>
                <div className="space-y-1">
                  <p><strong>Email:</strong> support@farmseasy.com</p>
                  <p><strong>Website:</strong> www.farmseasy.in</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">For technical issues and platform support</p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-800 mb-3">📋 Important Disclaimer</h2>
            <div className="text-sm text-yellow-700 space-y-2">
              <p>
                • This pricing policy is set and managed by <strong>Malang Event</strong>, the official event organizer.
              </p>
              <p>
                • <strong>Farmseasy Tech Solution Pvt. Ltd.</strong> serves solely as the technology platform provider for ticket booking services.
              </p>
              <p>
                • All pricing decisions, refund policies, and event-related matters are the responsibility of Malang Event.
              </p>
              <p>
                • For any disputes or clarifications regarding pricing, please contact Malang Event directly.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;