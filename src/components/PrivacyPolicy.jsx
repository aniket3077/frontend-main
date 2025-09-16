import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Malang Raas Dandiya 2025</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 16, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="mb-4">
              At Malang Raas Dandiya 2025, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, store, and protect your data when you use our ticketing platform and attend our event.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>Your Trust Matters:</strong> We only collect information necessary to provide you with the best event experience 
                and never sell your personal data to third parties.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Required Information:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Age (for appropriate ticket category)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Optional Information:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Address (for delivery purposes)</li>
                    <li>Emergency contact details</li>
                    <li>Dietary preferences/allergies</li>
                    <li>Special accessibility requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">💻 Technical Information</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>IP address</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Browser type and version</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Device information</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Operating system</li>
                </div>
                <div className="space-y-2">
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Website usage patterns</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Page visit timestamps</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Referral sources</li>
                  <li className="flex items-center"><span className="text-purple-600 mr-2">•</span>Click patterns and interactions</li>
                </div>
              </ul>
            </div>

            {/* Payment Information */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">💳 Payment Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">We Collect:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Transaction ID and amount</li>
                    <li>Payment method used</li>
                    <li>Payment timestamp</li>
                    <li>Billing address (if provided)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">We DO NOT Store:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Credit/debit card numbers</li>
                    <li>CVV codes</li>
                    <li>Banking passwords</li>
                    <li>UPI PINs</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-sm text-green-800">
                  <strong>Security Note:</strong> All payment processing is handled by Razorpay, a PCI DSS compliant payment gateway. 
                  We never have access to your complete payment card details.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Primary Uses */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">🎯 Primary Uses</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Ticket Processing:</strong> Generate and deliver your event tickets
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Event Communication:</strong> Send important event updates and information
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Customer Support:</strong> Respond to your queries and provide assistance
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Entry Verification:</strong> Verify your identity at the event entrance
                    </div>
                  </li>
                </ul>
              </div>

              {/* Secondary Uses */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">📊 Secondary Uses</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Analytics:</strong> Understand website usage and improve user experience
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Marketing:</strong> Send information about future events (with consent)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Safety & Security:</strong> Ensure event safety and prevent fraud
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Legal Compliance:</strong> Meet regulatory and legal requirements
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing & Third Parties</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">🛡️ We DO NOT Sell Your Data</h3>
              <p className="text-red-700">
                We never sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">✅ We Share Data With:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Payment Processors:</strong> Razorpay (for secure payment processing)</li>
                  <li><strong>SMS/Email Services:</strong> For sending tickets and event notifications</li>
                  <li><strong>Security Personnel:</strong> For event entry verification (name and ticket details only)</li>
                  <li><strong>Legal Authorities:</strong> When required by law or court orders</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Data Protection Measures:</h4>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• All third-party services are vetted for security compliance</li>
                  <li>• Data sharing agreements include strict confidentiality clauses</li>
                  <li>• Minimum necessary information is shared for specific purposes only</li>
                  <li>• Regular audits of third-party data handling practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security Measures</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4">🔒 Technical Security</h3>
                <ul className="space-y-2 text-sm">
                  <li>• SSL/TLS encryption for all data transmission</li>
                  <li>• Encrypted storage of sensitive information</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Secure cloud infrastructure with AWS/Google Cloud</li>
                  <li>• Two-factor authentication for admin access</li>
                  <li>• Regular backup and disaster recovery procedures</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">👥 Organizational Security</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Limited access to personal data on need-to-know basis</li>
                  <li>• Employee training on data protection best practices</li>
                  <li>• Confidentiality agreements for all staff and contractors</li>
                  <li>• Regular privacy impact assessments</li>
                  <li>• Incident response plan for data breaches</li>
                  <li>• Annual security training and certification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">🔐 You Have the Right To:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-indigo-700">Access Your Data</h4>
                    <p className="text-sm text-indigo-600">Request a copy of all personal data we hold about you</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-700">Correct Your Data</h4>
                    <p className="text-sm text-indigo-600">Update or correct any inaccurate personal information</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-700">Delete Your Data</h4>
                    <p className="text-sm text-indigo-600">Request deletion of your personal information (with some exceptions)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-indigo-700">Restrict Processing</h4>
                    <p className="text-sm text-indigo-600">Limit how we use your personal information</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-700">Data Portability</h4>
                    <p className="text-sm text-indigo-600">Receive your data in a machine-readable format</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-indigo-700">Withdraw Consent</h4>
                    <p className="text-sm text-indigo-600">Opt-out of marketing communications at any time</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-indigo-100 rounded">
                <p className="text-sm text-indigo-800">
                  <strong>How to Exercise Your Rights:</strong> Email us at privacy@malangdandiya.com with your request. 
                  We will respond within 30 days and may require identity verification.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies & Tracking Technologies</h2>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">🍪 Types of Cookies We Use</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Essential Cookies:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Session management</li>
                      <li>• Shopping cart functionality</li>
                      <li>• Security features</li>
                      <li>• Payment processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Analytics Cookies:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Website usage statistics</li>
                      <li>• Performance monitoring</li>
                      <li>• User behavior analysis</li>
                      <li>• Error tracking</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-orange-100 rounded">
                  <p className="text-sm text-orange-800">
                    <strong>Cookie Management:</strong> You can control cookies through your browser settings. 
                    Note that disabling essential cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Retention Period</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Booking Information</td>
                    <td className="border border-gray-300 px-4 py-2">7 years</td>
                    <td className="border border-gray-300 px-4 py-2">Tax and legal compliance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Payment Records</td>
                    <td className="border border-gray-300 px-4 py-2">7 years</td>
                    <td className="border border-gray-300 px-4 py-2">Financial regulations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Marketing Data</td>
                    <td className="border border-gray-300 px-4 py-2">Until consent withdrawn</td>
                    <td className="border border-gray-300 px-4 py-2">Marketing communications</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Website Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">26 months</td>
                    <td className="border border-gray-300 px-4 py-2">Performance optimization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Children's Privacy</h2>
            <div className="bg-pink-50 border-l-4 border-pink-400 p-6">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">👶 Special Protection for Minors</h3>
              <ul className="space-y-2 text-pink-700">
                <li>• We do not knowingly collect personal information from children under 13</li>
                <li>• Children's tickets must be purchased by parent/guardian</li>
                <li>• Parental consent required for children aged 13-18</li>
                <li>• Limited data collection for children's tickets (name, age, emergency contact)</li>
                <li>• Parents can request deletion of child's data at any time</li>
              </ul>
            </div>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Data Transfers</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Your personal data is primarily stored and processed in India. In some cases, data may be transferred to other countries for:
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Cloud Storage:</strong> AWS/Google Cloud servers (with adequate protection measures)</li>
                <li>• <strong>Email Services:</strong> International email service providers</li>
                <li>• <strong>Analytics:</strong> Google Analytics (anonymized data only)</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Protection Measures:</strong> All international transfers are protected by appropriate safeguards 
                  including encryption, contractual obligations, and compliance with international data protection standards.
                </p>
              </div>
            </div>
          </section>

          {/* Contact & Complaints */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us About Privacy</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📧 Privacy Officer</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@malangdandiya.com</p>
                  <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
                  <p><strong>Address:</strong> Privacy Officer, Malang Raas Dandiya 2025, Chh. Sambhaji Nagar, Maharashtra, India</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">⚖️ Data Protection Rights</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Response Time:</strong> Within 30 days</p>
                  <p><strong>Complaints:</strong> Contact our Privacy Officer first</p>
                  <p><strong>Escalation:</strong> Data Protection Authority if unresolved</p>
                  <p><strong>Free Service:</strong> No charges for privacy requests</p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="text-center bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">📋 Policy Updates</h3>
            <p className="text-purple-700 mb-3">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
            </p>
            <div className="text-sm text-purple-600 space-y-1">
              <p>• <strong>Minor Changes:</strong> Updated on website without notification</p>
              <p>• <strong>Material Changes:</strong> Email notification to registered users</p>
              <p>• <strong>Effective Date:</strong> Changes take effect 30 days after notification</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;