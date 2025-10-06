import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Luxury black car and SUV services in Los Angeles. Book GMG Transportation for executive travel, events, and airport transfers." />
      </Head>

      <section id="home" className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <img
            src="/images/GMG.png"
            alt="GMG Transportation Logo"
            className="mx-auto w-[90%] max-w-[350px] h-auto border-4 border-gray-800 rounded mb-8"
          />

          <br />
          
          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6 text-gray-700">
            Professional, reliable, and elegant transportation for every occasion. Let us take care of your journey.
          </p>

          <a
            href="/fleet"
            className="bg-gray-800 px-6 py-4 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-4"
          >
            Book a Ride
          </a>
          <a
            href="/contact"
            className="bg-gray-800 px-7 py-4 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto"
          >
            Contact Us
          </a>
        </div>
      </section>

      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        <a
          href="tel:+14243332293"
          className="text-gray-800 text-4xl font-bold hover:underline block mt-2 mx-auto"
        >
          323-284-8444
        </a>
      </h1>

      <h1 className="text-sm font-semibold text-gray-800 text-center">
        <a
          href="mailto:gmgtransinc@gmail.com"
          className="text-gray-800 text-sm font-medium hover:underline block mt-2 mx-auto"
        >
          gmgtransinc@gmail.com
        </a>
      </h1>

      <br /> <br />

    </>
  );
}