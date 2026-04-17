import React from 'react';
import Head from 'next/head';

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2 mt-4">1.1 Personal Information</h3>
        <p className="text-body mb-3">We collect personal information that you voluntarily provide when you make a booking, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, pickup/dropoff addresses, flight information, payment information (processed securely through Stripe), and special requests.</p>
        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2 mt-4">1.2 Automatically Collected Information</h3>
        <p className="text-body mb-3">When you visit our website, we automatically collect device information including IP address, browser type, device type, pages visited, and date/time of visit.</p>
        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-2 mt-4">1.3 Location Information</h3>
        <p className="text-body">When you use our booking system, we collect location information (pickup and dropoff addresses) to provide our transportation services.</p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-body mb-3">We use your information to process and fulfill bookings, communicate about reservations, provide customer support, process payments securely, maintain accounting records, improve our services, and send marketing with your consent.</p>
      </>
    ),
  },
  {
    title: "3. How We Share Your Information",
    content: (
      <>
        <p className="text-body mb-3">We do not sell your personal information. We share information only with essential service providers: <strong>Stripe</strong> (payment processing), <strong>Google Maps</strong> (route planning), <strong>Vercel</strong> (hosting), and <strong>Formspree</strong> (contact forms). We may also disclose information when required by law.</p>
      </>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <>
        <p className="text-body mb-3">We use essential, analytics, and optional marketing cookies. You can control cookies through your browser settings, though disabling them may affect site functionality.</p>
      </>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <>
        <p className="text-body">We implement SSL/TLS encryption, secure payment processing through Stripe, regular security audits, access controls, and employee confidentiality agreements. No method of internet transmission is 100% secure, but we strive to protect your information.</p>
      </>
    ),
  },
  {
    title: "6. Your Privacy Rights",
    content: (
      <>
        <p className="text-body mb-3">You have the right to access, correct, or delete your personal information, and to opt out of marketing at any time by emailing gmgtransinc@gmail.com or calling 323-284-8444.</p>
        <p className="text-body"><strong>California residents (CCPA)</strong> have additional rights: the right to know what information is collected, the right to opt-out of sale (we do not sell information), and the right to non-discrimination.</p>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <ul className="space-y-2 text-body">
        <li><strong>Booking Information:</strong> 7 years for tax and accounting purposes</li>
        <li><strong>Account Information:</strong> Until account deletion is requested</li>
        <li><strong>Marketing Data:</strong> Until you opt-out or request deletion</li>
        <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
      </ul>
    ),
  },
  {
    title: "8. Children's Privacy",
    content: <p className="text-body">Our services are not directed to individuals under 18. We do not knowingly collect information from children. Contact us immediately if you believe a child has provided us personal information.</p>,
  },
  {
    title: "9. Third-Party Links",
    content: <p className="text-body">Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.</p>,
  },
  {
    title: "10. Changes to This Policy",
    content: <p className="text-body">We may update this policy from time to time. We will notify you by posting the new policy on this page and updating the "Last Updated" date.</p>,
  },
  {
    title: "11. Contact Us",
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

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy policy and data protection information for GMG Transportation Inc." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">

          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-3 inline-flex">Legal</span>
            <h1 className="heading-lg mb-4">Privacy Policy</h1>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Last Updated: January 2025</p>
          </div>

          <div className="card mb-6">
            <p className="text-body">
              At GMG Transportation Inc. ("GMG," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and transportation services.
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
                borderLeft: '4px solid var(--color-accent)',
                border: '1px solid rgb(212 175 55 / 0.2)',
              }}
            >
              <p className="text-body font-semibold">
                By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/contact" className="btn-primary">
              Privacy Questions? Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}