import React from 'react';
import ContactForm from './ContactForm';

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-800 scroll-smooth">
      <section id="home" className="bg-white h-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto px-6 text-gray-800 text-center">
          <img
            src="/images/GMG.png"
            alt="GMG Transportation Logo"
            className="mx-auto w-[90%] max-w-[325px] h-auto border-4 border-gray-800 rounded"
          />

          <br /> <br /> <br />

          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6">Professional, reliable, and elegant transportation for every occasion.</p>
          <br />
          <a href="/fleet" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-8">
              Book a Ride
          </a>
          <a href="#contact" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-4">
              Contact Us
          </a>

          <br /> <br />

          <h1 className="text-2xl font-semibold text-gray-800">
            Contact GMG<a href="tel:+14243332293" className="text-gray-800 text-3xl font-bold hover:underline block mt-2">
              +1 (424) 333-2293
            </a>
          </h1>
        </div>
      </section>

      <section id="contact" className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">Have questions about our services? Contact us today — we’re here to help.</p>
          <ContactForm />
          <p className="mt-8 text-gray-600">
              Or call us directly at <a href="tel:+14243332293" className="text-gray-800 font-medium hover:underline"><br />+1 (424) 333-2293</a>
          </p>
        </div>
      </section>
    </div>
  );
}
