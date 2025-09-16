import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Understanding the teams behind your event experience.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Farmseasy Tech Solution Pvt. Ltd.</strong> is a technology company that provides Platform-as-a-Service (PaaS) solutions to businesses and event organizers. Our platform enables seamless online ticket booking, payment processing, and digital customer support.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                For this event, Farmseasy Tech Solution Pvt. Ltd. is the official technology partner providing the booking platform to <strong>Malang Event</strong>, the event organizer.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Farmseasy Tech Solution Pvt. Ltd.</h3>
                <p className="text-blue-800">
                  Acts as the parent company and platform provider.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-3">Malang Event</h3>
                <p className="text-green-800">
                  Acts as the service provider and organizer responsible for managing and conducting the event.
                </p>
              </div>
            </div>

            <section className="text-center bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <p className="text-lg font-semibold text-yellow-900">
                Together, we ensure a smooth and secure online booking experience for customers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Event Queries</h4>
                  <p className="text-gray-700">
                    For any queries regarding event details, cancellations, or refunds, please contact <strong>Malang Event</strong> directly.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Technical Concerns</h4>
                  <p className="text-gray-700">
                    For technical or platform-related concerns, you may contact <strong>Farmseasy Tech Solution Pvt. Ltd.</strong>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;