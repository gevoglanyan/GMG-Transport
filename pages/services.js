import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | GMG Transportation</title>
        <meta name="description" content="Explore GMG's premium transportation services including airport transfers, corporate travel, event rides, and more." />
      </Head>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-10">Our Premium Services</h3>

          <p className="text-lg text-gray-700 mb-14">
            At GMG Transportation Inc., we specialize in providing a seamless, first-class experience for every ride.
            Whether you're catching a flight, closing a business deal, or celebrating a once-in-a-lifetime event, we tailor
            our services to meet your exact needs—offering comfort, safety, and punctuality in every journey.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Luxury Airport Transfers</h4>
              <p className="text-gray-700">
                Say goodbye to the stress of travel. Our professional chauffeurs monitor your flight in real-time to ensure timely
                airport pick-ups and drop-offs. Enjoy plush seating, spacious interiors, and smooth rides in vehicles like our Escalades and Yukons.
              </p>
            </div>

            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Executive & Corporate Travel</h4>
              <p className="text-gray-700">
                Impress clients and colleagues with our discreet, professional chauffeur services designed for business travelers.
                Arrive at meetings in style with Wi-Fi-enabled vehicles and courteous, professionally dressed drivers.
              </p>
            </div>

            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Special Occasions & Events</h4>
              <p className="text-gray-700">
                Celebrate weddings, proms, anniversaries, concerts, or birthdays with elegance. Choose from stretch SUVs, luxury sedans, or party sprinters—
                all detailed to perfection. Red carpet service available.
              </p>
            </div>

            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Long-Distance & Intercity Travel</h4>
              <p className="text-gray-700">
                Traveling to San Diego, Palm Springs, or Las Vegas? Our long-distance service is a premium alternative to flying or rideshares—
                with full control over timing, privacy, and comfort.
              </p>
            </div>

            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Group Transportation & Events</h4>
              <p className="text-gray-700">
                We offer scalable transportation for conferences, corporate retreats, and more. Our team handles logistics, while you enjoy the ride
                in a premium SUV or sprinter van.
              </p>
            </div>

            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Hourly Chauffeur Service</h4>
              <p className="text-gray-700">
                Need a driver for a few hours? Our hourly service is ideal for shopping, errands, appointments, or nights out.
                Get personalized transportation on your schedule with premium service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
