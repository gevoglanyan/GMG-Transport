import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Learn about GMG Transportation's mission, values, and 15+ years of luxury transportation excellence in Los Angeles." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h3 className="heading-md mb-2">About</h3>
              <h1 className="heading-lg text-[var(--color-primary)] mb-4">
                GMG Transportation, Inc
              </h1>
              <div className="h-1 w-32 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Our Legacy</h3>
                  <p className="text-body">
                    GMG Transportation, Inc has proudly served the Los Angeles area for over 15 years, delivering premium transportation
                    services defined by elegance, professionalism, and reliability. With a fleet of luxury vehicles and experienced chauffeurs,
                    we ensure every ride is more than just a journey — it's a first-class experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Our Mission</h3>
                  <p className="text-body">
                    Our mission is simple: to elevate transportation into a luxurious, seamless, and unforgettable experience. Whether you're a corporate executive,
                    a bride-to-be, a frequent flyer, or a visitor seeking sophistication and comfort, GMG offers tailored solutions that meet your specific needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Our Fleet</h3>
                  <p className="text-body">
                    We take immense pride in our modern fleet, which includes luxury SUVs - all meticulously maintained and detailed for your comfort. Our chauffeurs are professionally trained, punctual, courteous, and committed to the highest standards of service.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Your Safety & Satisfaction</h3>
                  <p className="text-body">
                    At GMG, your safety and satisfaction come first. All our vehicles are insured and safety-inspected, and our drivers are background-checked and held to strict conduct protocols.
                    We use real-time GPS tracking and flight monitoring to ensure timely arrivals and departures—because your time is valuable.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center py-6">
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Experience the GMG Difference</h3>
                <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                  Whether it's a black-tie gala, airport pickup, day trip, or special event, we're here to make it extraordinary. 
                  Experience the GMG difference—where luxury meets reliability, and every mile matters.
                </p>
                <a href="/fleet" className="btn-accent inline-block hover:scale-105 transition-transform">
                  Book Your Ride Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}