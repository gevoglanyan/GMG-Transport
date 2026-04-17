import React from 'react';
import Head from 'next/head';
import Booking from '../components/Booking';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Luxury Airport Transfers',
    body: 'Say goodbye to travel stress. Our chauffeurs monitor your flight in real-time to ensure timely pickups and drop-offs. Enjoy plush seating and smooth rides in our Escalades and Yukons.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Executive & Corporate Travel',
    body: 'Impress clients and colleagues with our discreet, professional chauffeur service designed for business travelers. Wi-Fi-enabled vehicles and professionally dressed drivers included.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Special Occasions & Events',
    body: 'Celebrate weddings, proms, anniversaries, and more with elegance. Choose from luxury SUVs, all detailed to perfection. Red carpet service available.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Long-Distance & Intercity Travel',
    body: 'Traveling to San Diego, Palm Springs, or Las Vegas? Our long-distance service is a premium alternative to flying — full control over timing, privacy, and comfort.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Group Transportation',
    body: 'We offer scalable transportation for conferences, corporate retreats, and group events. Our team handles logistics while you enjoy the ride in a premium SUV or sprinter van.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hourly Chauffeur Service',
    body: 'Need a driver for a few hours? Perfect for shopping, errands, appointments, or nights out. Get personalized transportation on your schedule with premium service every step of the way.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Explore GMG's premium transportation services including airport transfers, corporate travel, event rides, and more." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-wide animate-fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-3 inline-flex">What We Offer</span>
            <h1 className="heading-lg mb-4">Our Premium Services</h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-body-lg max-w-3xl mx-auto">
              At GMG Transportation Inc., we specialize in providing a seamless, first-class experience for every ride.
              Whether you're catching a flight, closing a business deal, or celebrating a once-in-a-lifetime event, we tailor
              our services to meet your exact needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
            {services.map((s, i) => (
              <div
                key={i}
                className="card group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div
                  className="icon-badge mb-4 group-hover:scale-110 transition-transform"
                  style={{ width: '3.25rem', height: '3.25rem' }}
                >
                  {s.icon}
                </div>
                <h4
                  className="text-lg sm:text-xl font-bold mb-3 text-[var(--color-primary)]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.title}
                </h4>
                <p className="text-body text-sm sm:text-base">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="cta-card mb-10">
              <h2
                className="heading-sm mb-3 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to Book?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-4">
                Provide your trip details and we'll handle the rest.
              </p>
              <p className="text-gray-400 text-sm">
                Want to learn more about our vehicles?{' '}
                <Link href="/fleet" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>
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