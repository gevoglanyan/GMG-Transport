import React, { useState } from 'react';
import ContactForm from './ContactForm';
import VehiclesSection from './VehiclesSection';

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-800 scroll-smooth">
      <header className="bg-gray-800 shadow-md w-full px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap text-center sm:text-left">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white">GMG Transportation Inc</h1>
            <a href="tel:+14243332293" className="text-white text-sm font-medium hover:underline mt-1 block">
              +1 (424) 333-2293
            </a>
          </div>
          <button
            className="block sm:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-300 font-sans">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#vehicles" className="hover:text-white">Fleet</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
        {menuOpen && (
          <div className="block sm:hidden mt-2 px-4 space-y-2 text-sm font-medium text-gray-300">
            <br />
            <a href="#home" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="block hover:text-white" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#vehicles" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Fleet</a>
            <a href="#faqs" className="block hover:text-white" onClick={() => setMenuOpen(false)}>FAQs</a>
            <a href="#reviews" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
            <br />
          </div>
        )}
      </header>

      <section id="home" className="bg-white h-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto px-6 text-gray-800 text-center">
          <img src="/images/GMG.png" alt="GMG Transportation Logo" className="mx-auto w-[90%] max-w-[320px] h-auto" />
          <br />
          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6">Professional, reliable, and elegant transportation for every occasion.</p>
          <br />
          <a href="#vehicles" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-8">
            Book a Ride
          </a>
          <a href="#contact" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-4">
            Contact Us
          </a>
        </div>
      </section>

      <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-10">Our Premium Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Luxury Airport Transfers</h4>
              <p>Arrive in style with our punctual, comfortable, and hassle-free airport pick-ups and drop-offs in premium vehicles.</p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Executive & Corporate Travel</h4>
              <p>Impress clients and colleagues with our discreet, professional chauffeur services designed for business travelers.</p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Special Occasions & Events</h4>
              <p>Celebrate weddings, parties, or nights out with elegant and luxurious rides that make every event unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-6">About GMG Transportion Inc</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            GMG Transportation Inc. has proudly served the Los Angeles area for over 15 years, delivering premium transportation services defined by elegance, professionalism, and reliability. With a fleet of luxury vehicles and experienced chauffeurs, we ensure every ride is more than just a journey—it’s a first-class experience.
          </p>
        </div>
      </section>

      <VehiclesSection />

      <section id="faqs" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <h3 className="text-3xl font-semibold text-black-700 mb-8 text-center">Frequently Asked Questions</h3>
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
              <p className="text-gray-700 mt-1">Absolutely. We track your flight and ensure timely curbside pickup or meet-and-greet inside the terminal.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Can I book for long distance travel?</h4>
              <p className="text-gray-700 mt-1">Yes. While we’re based locally, we accommodate long-distance trips. Please use the contact form for a custom quote.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is your cancellation policy?</h4>
              <p className="text-gray-700 mt-1">Cancellations made at least 24 hours before pickup are fully refundable. Cancellations within 24 hours may incur a charge.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white-50 py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">What Our Clients Say</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="italic text-gray-700">
            “Outstanding service from start to finish. The driver was punctual, the Escalade was spotless, and our airport transfer was stress-free.”
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">— Amanda, Pasadena</p>

          <blockquote className="italic text-gray-700">
            “I booked GMG for a corporate event and they exceeded expectations. Professional, reliable, and the Yukon was very comfortable.”
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">— Daniel, Burbank</p>

          <blockquote className="italic text-gray-700">
            “Absolutely the best luxury transportation company we've used. The driver helped with luggage and got us to LAX with time to spare.”
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">— Michelle, Santa Monica</p>

          <blockquote className="italic text-gray-700">
            “Great experience from booking to drop-off. Clean car, friendly service, and very fair pricing. Highly recommend GMG.”
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">— Jason, Glendale</p>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">Have questions about our services? Contact us today — we’re here to help.</p>
          <ContactForm />
          <p className="mt-8 text-gray-600">
            Or call us directly at <a href="tel:+14243332293" className="text-green-600 font-medium hover:underline"><br />+1 (424) 333-2293</a>
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; {new Date().getFullYear()} GMG Transportation Inc.
        <span className="block md:inline md:ml-2">
          <br className="block md:hidden" />
          All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
