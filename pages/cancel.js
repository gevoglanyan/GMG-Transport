import Link from 'next/link';
import Head from 'next/head';

export default function Cancel() {
  return (
    <>
      <Head>
        <title>Booking Canceled</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Your GMG Transportation booking was canceled." />
      </Head>

      <div
        className="bg-gradient-to-b from-white to-[var(--color-bg)] flex items-center justify-center section-padding"
        style={{ minHeight: 'calc(100vh - var(--nav-height))' }}
      >
        <div className="w-full max-w-lg mx-auto animate-fade-in">
          <div className="card text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgb(220 38 38 / 0.08)' }}
            >
              <svg className="w-9 h-9" fill="none" stroke="var(--color-error)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              style={{ color: 'var(--color-error)' }}
            >
              Booking Canceled
            </h1>

            <p className="text-body-lg mb-2">
              Your payment was not completed and the booking has been canceled.
            </p>
            <p className="text-body mb-7">
              If you experienced any issues or need assistance, please don't hesitate to reach out.
            </p>

            <div
              className="rounded-[var(--radius-lg)] p-5 mb-7 text-left"
              style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
            >
              <h3 className="font-semibold text-[var(--color-primary)] mb-3 text-sm uppercase tracking-wide">Need Help?</h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: <span>Call us at{' '}<a href="tel:+13232848444" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>323-284-8444</a></span>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: <span>Email{' '}<a href="mailto:gmgtransinc@gmail.com" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>gmgtransinc@gmail.com</a></span>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />,
                    label: <Link href="/contact" className="font-semibold hover:underline" style={{ color: 'var(--color-accent)' }}>Send us a message</Link>,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                    <span className="text-body text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="btn-primary flex-1">Try Booking Again</Link>
              <Link href="/" className="btn-outline flex-1">Return to Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}