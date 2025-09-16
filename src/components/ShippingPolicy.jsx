import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping Policy</h1>
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
                This shipping policy applies to the digital ticket delivery service provided through our platform.
              </p>
              <p className="text-blue-700">
                <strong>Important:</strong> Farmseasy only provides the technology platform; responsibility for event execution 
                and ticket validity rests with Malang Event.
              </p>
            </div>
          </section>

          {/* Digital Service Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Digital Service Overview</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-yellow-800">No Physical Shipping Required</h3>
                  <p className="text-yellow-700 mt-2">
                    As this is an online ticket booking platform, no physical shipping of products is involved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* E-Ticket Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">E-Ticket Delivery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Instant Digital Delivery</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Upon successful payment completion
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Booking confirmation sent immediately
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    E-tickets delivered via email
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    SMS notification sent to registered mobile number
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Delivery Methods</h3>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">📧</span>
                    Email delivery to registered email address
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">📱</span>
                    SMS with booking details and QR code link
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">💾</span>
                    Download option available in your account
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">🔗</span>
                    Direct link to mobile-friendly ticket view
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Event Entry Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Entry Requirements</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-red-800">Mandatory Entry Requirement</h3>
                  <p className="text-red-700 mt-2">
                    <strong>Customers are required to present the e-ticket (digital or printed) at the event entry.</strong>
                  </p>
                  <ul className="mt-4 space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Digital e-ticket displayed on mobile device, OR
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Printed copy of the e-ticket
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Valid government-issued photo ID required alongside ticket
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      QR code must be clearly visible and scannable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Timeline</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Payment Status</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Delivery Time</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Delivery Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Successful Payment</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">Immediate (within 2 minutes)</td>
                    <td className="border border-gray-300 px-4 py-3">Email + SMS</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Payment Processing</td>
                    <td className="border border-gray-300 px-4 py-3 text-yellow-600">Within 15 minutes</td>
                    <td className="border border-gray-300 px-4 py-3">Email + SMS</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Payment Failed</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600">No delivery</td>
                    <td className="border border-gray-300 px-4 py-3">Failure notification only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Delivery Issues */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Issues & Resolution</h2>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Common Issues</h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">⚠️</span>
                    Email not received (check spam/junk folder)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">⚠️</span>
                    SMS not delivered (network issues)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">⚠️</span>
                    Incorrect email/mobile number provided
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">⚠️</span>
                    QR code not displaying properly
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Resolution Steps</h3>
                <ol className="space-y-2 text-blue-700 list-decimal list-inside">
                  <li>Check spam/junk folder in your email</li>
                  <li>Verify the contact information provided during booking</li>
                  <li>Log into your account to download tickets directly</li>
                  <li>Contact customer support with your booking reference number</li>
                  <li>Support team will resend tickets within 30 minutes during business hours</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Customer Support */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Support</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="mb-4">
                If you don't receive your e-ticket or encounter any delivery issues, please contact our support team:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>📧 Email: support@farmseasy.com</li>
                    <li>📱 Phone: +91-XXXXXXXXXX</li>
                    <li>💬 Live Chat: Available on website</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Support Hours</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                    <li>Saturday - Sunday: 10:00 AM - 6:00 PM</li>
                    <li>Event Day: 24/7 support available</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Notes</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  E-tickets are non-transferable and valid only for the registered attendee
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Screenshots or photocopies of QR codes will not be accepted for entry
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Ensure your mobile device is charged if using digital tickets
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Print tickets in high quality if choosing the printed option
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Keep your booking reference number safe for any future reference
                </li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600 text-center">
              This Shipping Policy is effective from September 16, 2025. For any queries regarding this policy, 
              please contact our customer support team.
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">
              Platform provided by Farmseasy Tech Solution Pvt. Ltd. | Event organized by Malang Event
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;