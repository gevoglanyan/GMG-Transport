import React, { useState } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className="bg-gray-800 shadow-md w-full px-4 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center">
          <nav className="hidden sm:flex space-x-6 text-base sm:text-xl font-medium text-gray-300 font-sans mx-auto">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/services" className="hover:text-white">Our Services</a>
            <a href="/fleet" className="hover:text-white">Our Fleet</a>
            <a href="/faqs" className="hover:text-white">FAQs</a>
            <a href="/reviews" className="hover:text-white">Reviews</a>
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </nav>

          <button
            className="sm:hidden text-gray-300 hover:text-white focus:outline-none ml-auto"
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
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 z-50 flex flex-col items-center justify-center space-y-6 text-lg text-white sm:hidden">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</a>
            <a href="/services" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Our Services</a>
            <a href="/fleet" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Our Fleet</a>
            <a href="/faqs" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">FAQs</a>
            <a href="/reviews" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Reviews</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About Us</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contact Us</a>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">GMG Transportation, Inc</h4>
              <p>Providing premium black car and SUV services across Southern California.</p>
              <p>Focused on professionalism, comfort, and customer satisfaction.</p>

              <br />

              <p className="mt-2">Have questions? Reach out anytime!</p>

              <br />

              <p className="mt-4">
                Created by{" "}
                <a
                  href="https://gevoglanyan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-600 hover:underline"
                >
                  Harry Gevoglanyan
                </a>
              </p>

            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/services" className="hover:underline">Our Services</a></li>
                <li><a href="/fleet" className="hover:underline">Our Fleet</a></li>
                <li><a href="/faqs" className="hover:underline">FAQs</a></li>
                <li><a href="/reviews" className="hover:underline">Reviews</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
        
            <div>
              <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
              <p>
                <a href="mailto:gmgtransinc@gmail.com" className="hover:underline">
                  gmgtransinc@gmail.com
                </a>
              </p>
              <p className="mt-1">
                <a href="tel:+14243332293" className="hover:underline">
                  323-284-8444
                </a>
              </p>
              <p className="mt-4">Based in Los Angeles, California</p>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GMG Transportation Inc. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}