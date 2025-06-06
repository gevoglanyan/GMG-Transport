import React from 'react';
import Head from 'next/head';

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>FAQs | GMG Transportation</title>
        <meta name="description" content="Find answers to frequently asked questions about booking, pricing, cancellations, and vehicle policies." />
      </Head>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <h3 className="text-3xl font-semibold text-black-700 mb-8 text-center">Frequently Asked Questions</h3>

          <br />

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is your minimum booking time?</h4>
              <p className="text-gray-700 mt-1">We require a minimum of 2 hours per booking for all vehicles.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do your rates include the driver?</h4>
              <p className="text-gray-700 mt-1">Yes. All bookings include a professional chauffeur as part of the rate.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do you provide airport pickups?</h4>
              <p className="text-gray-700 mt-1">
                Absolutely. We track your flight in real-time and ensure prompt curbside pickup or meet-and-greet inside the terminal based on your preference.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Can I book for long distance travel?</h4>
              <p className="text-gray-700 mt-1">
                Yes. We offer intercity travel throughout Southern California and beyond. Contact us directly for custom quotes for destinations like San Diego, Las Vegas, or Palm Springs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is your cancellation policy?</h4>
              <p className="text-gray-700 mt-1">
                Cancellations made at least 24 hours before the scheduled pickup time are fully refundable.
                Cancellations within 24 hours may incur a 50–100% charge depending on vehicle and timing.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do you allow last-minute bookings?</h4>
              <p className="text-gray-700 mt-1">
                We do our best to accommodate last-minute bookings based on vehicle and driver availability.
                However, we recommend booking at least 24–48 hours in advance for guaranteed service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Are your vehicles insured?</h4>
              <p className="text-gray-700 mt-1">
                Yes, all of our vehicles are fully licensed and insured for commercial use and passenger safety.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Can I request a specific vehicle or driver?</h4>
              <p className="text-gray-700 mt-1">
                Absolutely! While we can’t always guarantee the same driver or vehicle, we will do our best to honor your preferences based on availability.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do you provide child car seats?</h4>
              <p className="text-gray-700 mt-1">
                Yes. Child and booster seats are available upon request. Please mention this during the booking process so we can accommodate your needs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">How do I contact you if my plans change?</h4>
              <p className="text-gray-700 mt-1">
                You can call us anytime at <a href="tel:+14243332293" className="text-red-600 hover:underline">+1 (424) 333-2293</a> or use the contact form on our website.
                For urgent updates (e.g., flight delays), please call directly to ensure prompt adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
