import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Malang Raas Dandiya 2025</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 16, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By purchasing tickets for Malang Raas Dandiya 2025 or accessing our event, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not purchase tickets or attend the event.
            </p>
          </section>

          {/* 2. Event Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Event Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p><strong>Event:</strong> Malang Raas Dandiya 2025</p>
              <p><strong>Date:</strong> September 23, 2025</p>
              <p><strong>Time:</strong> 7:00 PM onwards</p>
              <p><strong>Venue:</strong> Chh. Sambhaji Nagar</p>
            </div>
            <p>
              Event details are subject to change. We will notify ticket holders of any significant changes via email or SMS.
            </p>
          </section>

          {/* 3. Ticket Purchase and Pricing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Ticket Purchase and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All ticket prices are in Indian Rupees (₹) and include applicable taxes</li>
              <li>Tickets are non-transferable and non-refundable except as specified in our Refund Policy</li>
              <li>Bulk discounts apply for purchases of 6 or more male/female tickets</li>
              <li>Special discounts may be available for specific dates as announced</li>
              <li>Payment must be completed to secure your booking</li>
              <li>We reserve the right to cancel bookings with incomplete payments</li>
            </ul>
          </section>

          {/* 4. Entry Rules and Restrictions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Entry Rules and Restrictions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Age Restrictions:</strong> Children under 6 years enter free. Kids tickets (6-12 years) must be accompanied by adults</li>
              <li><strong>Stag Entry:</strong> Stag males are not allowed entry to maintain event atmosphere</li>
              <li><strong>Valid ID Required:</strong> All attendees must carry valid photo identification</li>
              <li><strong>Dress Code:</strong> Traditional or festive attire encouraged. Inappropriate clothing may result in entry denial</li>
              <li><strong>Security Check:</strong> All attendees are subject to security screening</li>
              <li><strong>Prohibited Items:</strong> Outside food, alcohol, weapons, or any dangerous items are strictly prohibited</li>
            </ul>
          </section>

          {/* 5. Behavior and Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Behavior and Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respectful behavior towards all attendees, staff, and performers is mandatory</li>
              <li>Any form of harassment, discrimination, or inappropriate behavior will result in immediate removal</li>
              <li>Attendees must follow all safety instructions and venue rules</li>
              <li>Smoking and alcohol consumption are prohibited at the venue</li>
              <li>Photography and videography may be restricted in certain areas</li>
            </ul>
          </section>

          {/* 6. Health and Safety */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Health and Safety</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attendees participate at their own risk and must follow all safety guidelines</li>
              <li>We recommend attendees be in good health to participate in dancing activities</li>
              <li>First aid facilities will be available at the venue</li>
              <li>Please inform staff immediately of any medical emergencies</li>
              <li>We reserve the right to refuse entry to individuals who appear unwell</li>
            </ul>
          </section>

          {/* 7. Liability and Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Liability and Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="font-semibold text-yellow-800">Important: Please read this section carefully</p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>The organizers are not liable for any personal injury, loss, or damage to personal property</li>
              <li>Attendees participate in the event at their own risk</li>
              <li>We are not responsible for any medical conditions aggravated during the event</li>
              <li>Weather-related cancellations or changes are beyond our control</li>
              <li>We recommend attendees have appropriate insurance coverage</li>
            </ul>
          </section>

          {/* 8. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All event content, including music, performances, and branding, is protected by copyright</li>
              <li>Unauthorized recording or reproduction is strictly prohibited</li>
              <li>Attendees may appear in official event photography/videography</li>
              <li>By attending, you consent to the use of your likeness in promotional materials</li>
            </ul>
          </section>

          {/* 9. Force Majeure */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Force Majeure</h2>
            <p>
              We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, 
              including but not limited to natural disasters, government actions, pandemics, or other unforeseeable events. 
              In such cases, we will make reasonable efforts to reschedule or provide appropriate remedies.
            </p>
          </section>

          {/* 10. Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Data Protection</h2>
            <p>
              Your personal information is handled according to our Privacy Policy. By purchasing tickets, you consent to the 
              collection and use of your data as described in our Privacy Policy.
            </p>
          </section>

          {/* 11. Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Modifications</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated 
              to ticket holders via email or SMS. Continued attendance constitutes acceptance of modified terms.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the 
              jurisdiction of the courts in Maharashtra, India.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p><strong>Email:</strong> support@farmseasy.in</p>
              <p><strong>Phone:</strong> +91 9172788397</p>
              <p><strong>Address:</strong> Chh. Sambhaji Nagar, Maharashtra, India</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="text-center bg-purple-50 p-6 rounded-lg">
            <p className="text-lg font-semibold text-purple-800">
              By purchasing tickets and attending Malang Raas Dandiya 2025, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;