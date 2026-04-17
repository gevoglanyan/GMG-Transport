import React from 'react';
import Head from 'next/head';

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: <p className="text-body">By accessing and using the services provided by GMG Transportation Inc. ("GMG," "we," "us," or "our"), you accept and agree to be bound by these Terms of Service. These terms apply to all users of our transportation services, including passengers, bookers, and website visitors.</p>,
  },
  {
    title: "2. Service Description",
    content: (
      <>
        <p className="text-body mb-3">GMG Transportation provides luxury ground transportation services in Southern California, including:</p>
        <ul className="space-y-1.5 text-body">
          {["Airport transfers (pickup and dropoff)", "Corporate and executive travel", "Special event transportation", "Hourly chauffeur services", "Long-distance intercity travel"].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "3. Booking and Reservations",
    content: (
      <>
        <p className="text-body mb-3">Reservations can be made through our website, by phone at <a href="tel:+13232848444" className="font-semibold" style={{ color: 'var(--color-accent)' }}>323-284-8444</a>, or via email. All bookings require a minimum of 2 hours. We recommend booking 24-48 hours in advance.</p>
        <p className="text-body">All bookings receive a confirmation via email or phone. Please verify all details are correct — it is your responsibility to notify us of any errors.</p>
      </>
    ),
  },
  {
    title: "4. Payment Terms",
    content: (
      <>
        <p className="text-body mb-3">We accept Visa, Mastercard, American Express, and debit cards. Payment is required at time of booking through our secure Stripe system. Corporate accounts with approved invoicing have 30-day payment terms.</p>
        <p className="text-body">Gratuity is not included and is at the customer's discretion. Standard gratuity is 15–20%.</p>
      </>
    ),
  },
  {
    title: "5. Cancellation and Refund Policy",
    content: (
      <div className="space-y-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[
            { timeframe: "24+ hours notice", policy: "Full refund minus processing fees", color: 'var(--color-success)' },
            { timeframe: "12–24 hours notice", policy: "50% refund", color: '#d97706' },
            { timeframe: "Less than 12 hours", policy: "No refund", color: 'var(--color-error)' },
            { timeframe: "No-show", policy: "100% charge", color: 'var(--color-error)' },
          ].map((row) => (
            <div
              key={row.timeframe}
              className="flex items-center justify-between gap-3 p-3 rounded-[var(--radius-md)]"
              style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
            >
              <span className="text-sm font-medium text-[var(--color-text-primary)]">{row.timeframe}</span>
              <span className="text-sm font-semibold" style={{ color: row.color }}>{row.policy}</span>
            </div>
          ))}
        </div>
        <p className="text-body text-sm">For airport pickups, we monitor flights in real-time. No charge for delays due to flight changes.</p>
      </div>
    ),
  },
  {
    title: "6. Customer Responsibilities",
    content: (
      <>
        <p className="text-body mb-3">Please provide accurate pickup/dropoff locations, contact information, and number of passengers. Be ready at your pickup location at the scheduled time — a 15-minute grace period is provided, after which wait time charges of $25/15 min may apply.</p>
        <p className="text-body">Passengers must not smoke in the vehicle, treat the driver and vehicle with respect, comply with applicable laws, and ensure children are properly secured. Customers are responsible for any vehicle damage caused by passengers.</p>
      </>
    ),
  },
  {
    title: "7. Liability and Insurance",
    content: (
      <>
        <p className="text-body mb-3">All GMG vehicles are fully insured for commercial passenger transportation as required by California law. Insurance certificates are available upon request.</p>
        <p className="text-body">GMG's liability is limited to direct damages only. We are not liable for missed flights or events due to traffic, lost personal belongings, or indirect/consequential damages.</p>
      </>
    ),
  },
  {
    title: "8. Service Modifications",
    content: <p className="text-body">Route changes or additional stops requested during service may result in additional charges. Hourly booking extensions are subject to availability and billed at the hourly rate.</p>,
  },
  {
    title: "9. Force Majeure",
    content: <p className="text-body">GMG Transportation is not liable for failure to perform services due to natural disasters, severe weather, civil unrest, government restrictions, or vehicle mechanical failures beyond our control.</p>,
  },
  {
    title: "10. Dispute Resolution",
    content: <p className="text-body">Complaints should be directed to us within 48 hours of service completion at <a href="mailto:gmgtransinc@gmail.com" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>gmgtransinc@gmail.com</a> or 323-284-8444. These Terms are governed by California law; disputes shall be resolved in Los Angeles County courts.</p>,
  },
  {
    title: "11. Changes to Terms",
    content: <p className="text-body">GMG Transportation reserves the right to modify these Terms at any time. Changes are effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.</p>,
  },
  {
    title: "12. Contact Information",
    content: (
      <div
        className="rounded-[var(--radius-lg)] p-5"
        style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
      >
        <p className="text-body mb-1"><strong>GMG Transportation Inc.</strong></p>
        <p className="text-body mb-1">Email: <a href="mailto:gmgtransinc@gmail.com" className="hover:underline" style={{ color: 'var(--color-accent)' }}>gmgtransinc@gmail.com</a></p>
        <p className="text-body mb-1">Phone: <a href="tel:+13232848444" className="hover:underline" style={{ color: 'var(--color-accent)' }}>323-284-8444</a></p>
        <p className="text-body">Location: Los Angeles, California</p>
      </div>
    ),
  },
];

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Terms of service, booking policies, and user agreements for GMG Transportation Inc." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">

          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-3 inline-flex">Legal</span>
            <h1 className="heading-lg mb-4">Terms of Service</h1>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Last Updated: January 2025</p>
          </div>

          <div className="card mb-6">
            <p className="text-body">
              By accessing and using GMG Transportation Inc. services, you accept and agree to be bound by these Terms of Service.
              Please read them carefully before using our services.
            </p>
          </div>

          <div className="space-y-4">
            {sections.map((section, i) => (
              <div key={i} className="card">
                <h2
                  className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-4 pb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}

            <div
              className="rounded-[var(--radius-xl)] p-5 sm:p-6"
              style={{
                background: 'rgb(212 175 55 / 0.08)',
                border: '1px solid rgb(212 175 55 / 0.2)',
                borderLeft: '4px solid var(--color-accent)',
              }}
            >
              <p className="text-body font-semibold">
                By using GMG Transportation services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/contact" className="btn-primary">Questions? Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}