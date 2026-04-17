import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
  return (
    <>
      <Head>
        <title>Booking Confirmed</title>
        <meta name="description" content="Your GMG Transportation booking was successfully confirmed." />
        <meta name="robots" content="noindex" />
      </Head>

      <div
        className="bg-gradient-to-b from-white to-[var(--color-bg)] flex items-center justify-center section-padding"
        style={{ minHeight: 'calc(100vh - var(--nav-height))' }}
      >
        <div className="w-full max-w-lg mx-auto animate-fade-in">
          <div className="card text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgb(5 150 105 / 0.1)' }}
            >
              <svg className="w-9 h-9" fill="none" stroke="var(--color-success)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <img
              src="/images/GMG.png"
              alt="GMG Transportation Logo"
              className="mx-auto mb-6 rounded-xl shadow-md"
              style={{
                width: 'clamp(140px, 50%, 240px)',
                border: '3px solid var(--color-primary)',
              }}
            />

            <h1
              className="heading-md mb-3"
              style={{ color: 'var(--color-success)' }}
            >
              Booking Confirmed!
            </h1>

            <p className="text-body-lg mb-6">
              Thank you for choosing GMG Transportation Inc. We'll be in touch soon to confirm all the details of your reservation.
            </p>

            <div
              className="rounded-[var(--radius-lg)] p-5 mb-7 text-left"
              style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
            >
              <h3 className="font-semibold text-[var(--color-primary)] mb-3 text-sm uppercase tracking-wide">What's Next?</h3>
              <ul className="space-y-2.5">
                {[
                  "You'll receive a confirmation email shortly",
                  "Our team will contact you to confirm details",
                  "Your chauffeur will arrive on time for your pickup",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-primary flex-1">Return to Homepage</Link>
              <Link href="/services" className="btn-outline flex-1">View Services</Link>
            </div>

            <p className="text-xs mt-5" style={{ color: 'var(--color-text-muted)' }}>
              Questions? Call us at{' '}
              <a href="tel:+13232848444" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>
                323-284-8444
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}