import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm'; 

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | GMG Transportation </title>
        <meta name="description" content="Get in touch with GMG Transportation Inc. for bookings, questions, or custom ride requests." />
      </Head>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">
            Have questions about our services? Need help with a booking? Fill out the form below or reach out directly — we’re here to help.
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  );
}