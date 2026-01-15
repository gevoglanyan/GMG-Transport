import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
  return (
    <>
      <Head>
        <title>Booking Confirmed</title>
        <meta name="description" content="Your GMG Transportation booking was successfully confirmed." />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-b from-white to-[var(--color-bg)] min-h-screen flex items-center justify-center section-padding">
        <div className="container-narrow text-center animate-fade-in">
          <div className="card max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-[var(--color-success)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-[var(--color-success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <img
              src="/images/GMG.png"
              alt="GMG Transportation Logo"
              className="mx-auto w-[80%] max-w-[300px] h-auto border-4 border-[var(--color-primary)] rounded-xl mb-8 shadow-lg"
            />

            <h1 className="heading-md text-[var(--color-success)] mb-4">
              Booking Confirmed!
            </h1>
            
            <p className="text-body-lg mb-6">
              Thank you for choosing GMG Transportation Inc. We'll be in touch soon to confirm all the details of your reservation.
            </p>

            <div className="card bg-[var(--color-bg)] mb-8 text-left">
              <h3 className="font-semibold text-[var(--color-primary)] mb-3">What's Next?</h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our team will contact you to confirm details</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your chauffeur will arrive on time for your pickup</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary text-center"
              >
                Return to Homepage
              </Link>
              
              <Link
                href="/services"
                className="btn-outline text-center"
              >
                View Services
              </Link>
            </div>

            <p className="text-sm text-[var(--color-text-muted)] mt-8">
              Questions? Call us at{' '}
              <a href="tel:+14243332293" className="text-[var(--color-accent)] hover:underline font-semibold">
                323-284-8444
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}