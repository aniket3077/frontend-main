import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cancellation & Refund Policy</h1>
          <p className="text-gray-600">Malang Raas Dandiya 2025</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 16, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* Policy Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Overview</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-blue-800">
                <strong>Important:</strong> Due to the limited capacity and special nature of our event, refunds are generally not available. 
                However, we understand that unforeseen circumstances may arise, and we have outlined specific conditions where refunds may be considered.
              </p>
            </div>
            <p>
              This policy covers cancellations and refunds for Malang Raas Dandiya 2025 ticket purchases. 
              Please read this policy carefully before purchasing tickets.
            </p>
          </section>

          {/* Refund Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Eligibility</h2>
            
            {/* Eligible Cases */}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Refunds May Be Granted For:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Event Cancellation:</strong> Full refund if the event is cancelled by organizers
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Event Postponement:</strong> Option to transfer tickets or receive refund if new date doesn't suit
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Medical Emergency:</strong> Serious illness or medical emergency (medical certificate required)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Duplicate Purchase:</strong> Accidental duplicate booking (must be reported within 2 hours)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Technical Error:</strong> Booking error due to technical issues on our platform
                  </div>
                </li>
              </ul>
            </div>

            {/* Non-Eligible Cases */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Refunds Will NOT Be Granted For:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Change of Mind:</strong> Personal decision to not attend the event
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Travel Issues:</strong> Flight delays, transportation problems, or travel restrictions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Weather Conditions:</strong> Mild weather that doesn't prevent the event from proceeding
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Non-Attendance:</strong> Simply not showing up for the event
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Late Requests:</strong> Refund requests made less than 48 hours before the event
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Refund Timeline */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Timeline & Process</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Timeline */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">📅 Request Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-bold mr-3">7+ Days</span>
                    <span>Full consideration for eligible requests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-sm font-bold mr-3">3-7 Days</span>
                    <span>Limited consideration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-sm font-bold mr-3">&lt;48 Hours</span>
                    <span>Emergency cases only</span>
                  </li>
                </ul>
              </div>

              {/* Process */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">🔄 Refund Process</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Submit refund request with documentation</li>
                  <li>Review period: 2-3 business days</li>
                  <li>Decision notification via email/SMS</li>
                  <li>If approved: Processing begins</li>
                  <li>Refund credited: 5-7 business days</li>
                </ol>
              </div>
            </div>
          </section>

          {/* How to Request Refund */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Request a Refund</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Step-by-Step Process:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold">Contact Our Support Team</h4>
                    <p className="text-sm text-gray-600">Email: refunds@malangdandiya.com or Call: +91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold">Provide Required Information</h4>
                    <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                      <li>Booking ID/Reference Number</li>
                      <li>Registered Email Address</li>
                      <li>Phone Number used for booking</li>
                      <li>Reason for refund request</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold">Submit Supporting Documents</h4>
                    <p className="text-sm text-gray-600">If applicable: Medical certificates, proof of emergency, etc.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <h4 className="font-semibold">Await Review</h4>
                    <p className="text-sm text-gray-600">Our team will review your request within 2-3 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <h4 className="font-semibold">Receive Decision</h4>
                    <p className="text-sm text-gray-600">You'll be notified of the decision via email and SMS</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Amounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Amounts</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Request Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Refund Amount</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Processing Fee</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Event Cancellation</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">100%</td>
                    <td className="border border-gray-300 px-4 py-2">None</td>
                    <td className="border border-gray-300 px-4 py-2">7-10 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Medical Emergency</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">90%</td>
                    <td className="border border-gray-300 px-4 py-2">10%</td>
                    <td className="border border-gray-300 px-4 py-2">5-7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Technical Error</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">100%</td>
                    <td className="border border-gray-300 px-4 py-2">None</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Duplicate Purchase</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-green-600">95%</td>
                    <td className="border border-gray-300 px-4 py-2">5%</td>
                    <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Processing fees help cover payment gateway charges and administrative costs. 
                Refunds are processed to the original payment method used for purchase.
              </p>
            </div>
          </section>

          {/* Alternative Options */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alternative Options</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🎫 Ticket Transfer</h3>
                <p className="text-green-700 mb-3">
                  Cannot attend? Consider transferring your ticket to a friend or family member.
                </p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Contact us to update attendee details</li>
                  <li>• No additional charges for name changes</li>
                  <li>• Must be done 24 hours before event</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📅 Credit for Future Events</h3>
                <p className="text-blue-700 mb-3">
                  Receive credit for future Malang Raas events if refund isn't available.
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• 100% credit value (no processing fee)</li>
                  <li>• Valid for 1 year from issue date</li>
                  <li>• Transferable to other events by organizer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Force Majeure Events</h2>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Uncontrollable Circumstances</h3>
              <p className="text-orange-700 mb-3">
                In case of events beyond our control (natural disasters, government restrictions, pandemics, etc.), 
                we will offer one of the following options:
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Reschedule:</strong> Transfer tickets to new date (if announced)</li>
                <li>• <strong>Full Refund:</strong> 100% refund if event cannot be rescheduled</li>
                <li>• <strong>Credit Option:</strong> 110% credit for future events</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Support</h2>
            <p className="mb-4">
              For refund requests or questions about our cancellation policy, please contact our dedicated refund support team:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact Details</h3>
                <div className="space-y-1 text-sm">
                  <p><strong>Email:</strong> refunds@malangdandiya.com</p>
                  <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
                  <p><strong>WhatsApp:</strong> +91 XXXXX XXXXX</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Support Hours</h3>
                <div className="space-y-1 text-sm">
                  <p><strong>Monday - Friday:</strong> 10:00 AM - 7:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 5:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-100 rounded">
              <p className="text-sm text-blue-800">
                <strong>Emergency Contact:</strong> For urgent refund requests within 48 hours of the event, 
                please call our emergency hotline: +91 XXXXX XXXXX (Available 24/7)
              </p>
            </div>
          </section>

          {/* Important Notice */}
          <section className="text-center bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ Important Notice</h3>
            <p className="text-red-700">
              This refund policy is subject to the terms and conditions of ticket purchase. 
              Refunds are granted at the sole discretion of the event organizers based on the circumstances provided. 
              All refund decisions are final and cannot be appealed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;