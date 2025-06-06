import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | GMG Transportation</title>
        <meta name="description" content="Learn about GMG Transportation's mission, values, and 15+ years of luxury transportation excellence in Los Angeles." />
      </Head>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-semibold text-black-700 mb-6">About 
                                                                    <br />GMG Transportation, Inc
          </h3>

          <br />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GMG Transportation, Inc has proudly served the Los Angeles area for over 15 years, delivering premium transportation
            services defined by elegance, professionalism, and reliability. With a fleet of luxury vehicles and experienced chauffeurs,
            we ensure every ride is more than just a journey — it’s a first-class experience.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is simple: to elevate transportation into a luxurious, seamless, and unforgettable experience. Whether you’re a corporate executive,
            a bride-to-be, a frequent flyer, or a visitor seeking sophistication and comfort, GMG offers tailored solutions that meet your specific needs.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We take immense pride in our modern fleet, which includes luxury SUVs - all meticulously maintained and detailed for your comfort. Our chauffeurs are professionally trained, punctual, courteous, and committed to the highest standards of service.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At GMG, your safety and satisfaction come first. All our vehicles are insured and safety-inspected, and our drivers are background-checked and held to strict conduct protocols.
            We use real-time GPS tracking and flight monitoring to ensure timely arrivals and departures—because your time is valuable.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s a black-tie gala, airport pickup, day trip, or special event, we’re here to make it extraordinary. Experience the GMG difference—where luxury meets reliability, and every mile matters.
          </p>
        </div>
      </section>
    </>
  );
}