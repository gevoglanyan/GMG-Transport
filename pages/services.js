import React from 'react';
import Head from 'next/head';
import Booking from '../components/Booking';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Explore GMG's premium transportation services including airport transfers, corporate travel, event rides, and more."
        />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-wide animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="heading-lg mb-4">Our Premium Services</h3>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg max-w-3xl mx-auto">
              At GMG Transportation Inc., we specialize in providing a seamless, first-class experience for every ride.
              Whether you're catching a flight, closing a business deal, or celebrating a once-in-a-lifetime event, we tailor
              our services to meet your exact needs—offering comfort, safety, and punctuality in every journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Luxury Airport Transfers
              </h4>
              <p className="text-body">
                Say goodbye to the stress of travel. Our professional chauffeurs monitor your flight in real-time to ensure timely
                airport pick-ups and drop-offs. Enjoy plush seating, spacious interiors, and smooth rides in vehicles like our Escalades and Yukons.
              </p>
            </div>

            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Executive & Corporate Travel
              </h4>
              <p className="text-body">
                Impress clients and colleagues with our discreet, professional chauffeur services designed for business travelers.
                Arrive at meetings in style with Wi-Fi-enabled vehicles and courteous, professionally dressed drivers.
              </p>
            </div>

            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Special Occasions & Events
              </h4>
              <p className="text-body">
                Celebrate weddings, proms, anniversaries, concerts, or birthdays with elegance. Choose from stretch SUVs, luxury sedans, or party sprinters—
                all detailed to perfection. Red carpet service available.
              </p>
            </div>

            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Long-Distance & Intercity Travel
              </h4>
              <p className="text-body">
                Traveling to San Diego, Palm Springs, or Las Vegas? Our long-distance service is a premium alternative to flying or rideshares—
                with full control over timing, privacy, and comfort.
              </p>
            </div>

            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Group Transportation & Events
              </h4>
              <p className="text-body">
                We offer scalable transportation for conferences, corporate retreats, and more. Our team handles logistics, while you enjoy the ride
                in a premium SUV or sprinter van.
              </p>
            </div>

            <div className="card group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 bg-[var(--color-accent)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[var(--color-primary)] font-['Playfair_Display']">
                Hourly Chauffeur Service
              </h4>
              <p className="text-body">
                Need a driver for a few hours? Our hourly service is ideal for shopping, errands, appointments, or nights out.
                Get personalized transportation on your schedule with premium service every step of the way.
              </p>
            </div>
          </div>

          <div className="max-w-8xl mx-auto" id="booking">
            <div className="card bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-center mb-12">
              <h4 className="heading-sm mb-4 text-white">Ready to Book?</h4>
              <p className="text-lg mb-4 text-gray-200">
                Provide your trip details and we'll handle the rest.
              </p>
              <p className="text-gray-300 mb-6">
                Want to learn more about our vehicles?{' '}
                <Link href="/fleet" className="text-[var(--color-accent)] font-semibold hover:underline">
                  View Our Fleet
                </Link>
              </p>
            </div>
            <Booking />
          </div>
        </div>
      </section>
    </>
  );
}