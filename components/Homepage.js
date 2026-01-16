import React from 'react';
import Head from 'next/head';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Luxury black car and SUV services in Los Angeles. Book GMG Transportation for executive travel, events, and airport transfers." />
      </Head>

      <section id="home" className="relative flex flex-col items-center section-padding text-center bg-gradient-to-b from-white to-[var(--color-bg)] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in">
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-10 blur-3xl rounded-full"></div>
            <img
              src="/images/GMG.png"
              alt="GMG Transportation Logo"
              className="mx-auto w-[90%] max-w-[400px] h-auto border-4 border-[var(--color-primary)] rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="heading-lg mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
            Luxury Transportation Services
          </h1>
          
          <p className="text-body-lg mb-10 max-w-2xl mx-auto">
            Professional, reliable, and elegant transportation for every occasion. 
            Experience the difference with GMG Transportation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/services"
              className="btn-accent w-full sm:w-auto text-center min-w-[200px] hover:scale-105 shadow-lg"
            >
              Book Your Ride
            </a>
            <a
              href="/contact"
              className="btn-outline w-full sm:w-auto text-center min-w-[200px] hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          <div className="space-y-4 pt-8 border-t border-[var(--color-border)]">
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2 uppercase tracking-wider font-medium">
                Call Us Now
              </p>
              <a
                href="tel:+14243332293"
                className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 font-['Playfair_Display']"
              >
                (323) 284-8444
              </a>
            </div>

            <br />
            
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-1 uppercase tracking-wider font-medium">
                Email Us
              </p>
              <a
                href="mailto:gmgtransinc@gmail.com"
                className="text-base text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 font-medium"
              >
                gmgtransinc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      </section>
    </>
  );
}