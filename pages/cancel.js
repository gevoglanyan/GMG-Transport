import Link from 'next/link';
import Head from 'next/head';

export default function Cancel() {
  return (
    <>
      <Head>
        <title>Canceled</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Your GMG Transportation booking was canceled." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-b from-white to-[var(--color-bg)] min-h-screen flex items-center justify-center section-padding">
        <div className="container-narrow text-center animate-fade-in">
          <div className="card max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <img
              src="/images/GMG.png"
              alt="GMG Transportation Logo"
              className="mx-auto w-[80%] max-w-[300px] h-auto border-4 border-[var(--color-primary)] rounded-xl mb-8 shadow-lg"
            />

            <h1 className="heading-md text-red-600 mb-4">
              Booking Canceled
            </h1>
            
            <p className="text-body-lg mb-3">
              Your payment was not completed and the booking has been canceled.
            </p>
            
            <p className="text-body mb-8">
              If you experienced any issues or need assistance, please don't hesitate to contact us.
            </p>

            <div className="card bg-[var(--color-bg)] mb-8 text-left">
              <h3 className="font-semibold text-[var(--color-primary)] mb-3">Need Help?</h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>
                    Call us directly at{' '}
                    <a href="tel:+14243332293" className="text-[var(--color-accent)] hover:underline font-semibold">
                      323-284-8444
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>
                    Email us at{' '}
                    <a href="mailto:gmgtransinc@gmail.com" className="text-[var(--color-accent)] hover:underline font-semibold">
                      gmgtransinc@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>
                    <Link href="/contact" className="text-[var(--color-accent)] hover:underline font-semibold">
                      Send us a message
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="btn-primary text-center"
              >
                Try Booking Again
              </Link>
              
              <Link
                href="/"
                className="btn-outline text-center"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}