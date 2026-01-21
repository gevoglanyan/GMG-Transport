import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <header className="bg-[var(--color-primary)] shadow-lg w-full px-4 py-5 sm:py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center">
          <button
            className="sm:hidden text-gray-300 hover:text-white focus:outline-none transition-colors"
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

          <nav className="hidden sm:flex space-x-6 text-base sm:text-xl font-medium text-gray-300 font-sans mx-auto">
            <a href="/" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">Home</a>
            <a href="/services" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">Services</a>
            <a href="/fleet" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">Fleet</a>
            <a href="/faqs" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">FAQs</a>
            <a href="/reviews" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">Reviews</a>
            <a href="/about" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">About</a>
            <a href="/contact" className="hover:text-[var(--color-accent)] transition-colors duration-200 font-medium">Contact</a>
          </nav>

          <button
            className="sm:hidden text-gray-300 hover:text-[var(--color-accent)] focus:outline-none transition-colors"
            aria-label="Login"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-[var(--color-primary)] z-50 flex flex-col items-center justify-center space-y-8 text-lg text-white sm:hidden animate-fade-in overflow-hidden">
            <button
              className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">Home</a>
            <a href="/services" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">Services</a>
            <a href="/fleet" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">Fleet</a>
            <a href="/faqs" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">FAQs</a>
            <a href="/reviews" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">Reviews</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">About</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors font-medium">Contact</a>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[var(--color-primary)] text-white py-16 border-t-2 border-[var(--color-accent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold mb-4 text-[var(--color-accent)] font-['Playfair_Display']">GMG Transportation, Inc</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Providing premium black car and SUV services across Southern California.
                Focused on professionalism, comfort, and customer satisfaction.
              </p>
              <p className="text-gray-400 text-sm mt-6">
                Have questions? Reach out anytime!
              </p>
              <br />
              <p className="text-gray-400 text-sm mt-4">
                Created by{" "}
                <a
                  href="https://gevoglanyan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline font-medium"
                >
                  Harry Gevoglanyan
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[var(--color-accent)] font-['Playfair_Display']">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><a href="/" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Home</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Our Services</a></li>
                <li><a href="/fleet" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Our Fleet</a></li>
                <li><a href="/faqs" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">FAQs</a></li>
                <li><a href="/reviews" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Reviews</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Contact Us</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
        
            <div>
              <h4 className="text-xl font-bold mb-4 text-[var(--color-accent)] font-['Playfair_Display']">Contact Information</h4>
              <p className="text-gray-300 mb-3">
                <a href="mailto:gmgtransinc@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">
                  gmgtransinc@gmail.com
                </a>
              </p>
              <p className="text-gray-300 mb-4">
                <a href="tel:+14243332293" className="hover:text-[var(--color-accent)] transition-colors font-semibold text-lg">
                  (323) 284-8444
                </a>
              </p>
              <p className="text-gray-300 mb-4">
                <a 
                  href="https://instagram.com/gmgtransportation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors flex items-center justify-center md:justify-start gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @gmgtransportation
                </a>
              </p>
              <br />
              <p className="text-gray-400 text-sm mt-6">Based in Los Angeles, California</p>
            </div>
          </div>

          <hr className="my-10 border-[var(--color-primary-light)]" />
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GMG Transportation Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}