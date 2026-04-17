import React from 'react';
import Head from 'next/head';

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Our Legacy',
    body: `GMG Transportation, Inc has proudly served the Los Angeles area for over 15 years, delivering premium transportation
services defined by elegance, professionalism, and reliability. With a fleet of luxury vehicles and experienced chauffeurs,
we ensure every ride is more than just a journey — it's a first-class experience.`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Our Mission',
    body: `Our mission is simple: to elevate transportation into a luxurious, seamless, and unforgettable experience. Whether you're a corporate executive,
a bride-to-be, a frequent flyer, or a visitor seeking sophistication and comfort, GMG offers tailored solutions that meet your specific needs.`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Our Fleet',
    body: `We take immense pride in our modern fleet, which includes luxury SUVs — all meticulously maintained and detailed for your comfort. Our chauffeurs are professionally trained, punctual, courteous, and committed to the highest standards of service.`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Your Safety & Satisfaction',
    body: `At GMG, your safety and satisfaction come first. All our vehicles are insured and safety-inspected, and our drivers are background-checked and held to strict conduct protocols.
We use real-time GPS tracking and flight monitoring to ensure timely arrivals and departures — because your time is valuable.`,
  },
];

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Availability' },
  { value: '100%', label: 'Licensed & Insured' },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About GMG</title>
        <meta name="description" content="Learn about GMG Transportation's mission, values, and 15+ years of luxury transportation excellence in Los Angeles." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-3 inline-flex">About Us</span>
            <h1 className="heading-lg text-[var(--color-primary)] mb-4">
              GMG Transportation, Inc
            </h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-body-lg max-w-2xl mx-auto">
              Serving Los Angeles with premium luxury transportation for over 15 years.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 p-6 sm:p-8 rounded-[var(--radius-xl)] text-center"
            style={{
              background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)`,
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-accent)', fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {s.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card hover:scale-[1.01] transition-transform duration-300 animate-slide-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-badge">{p.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-primary)] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-body">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="cta-card mt-6">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Experience the GMG Difference
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl mx-auto">
                Whether it's a black-tie gala, airport pickup, day trip, or special event, we're here to make it extraordinary.
                Every mile matters.
              </p>
              <br />
              <a href="/fleet" className="btn-accent">
                Book Your Ride Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}