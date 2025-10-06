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

      <div className="bg-white text-center py-16 px-4 min-h-screen">
        <img
          src="/images/GMG.png"
          alt="GMG Transportation Logo"
          className="mx-auto w-[90%] max-w-[350px] h-auto border-4 border-gray-800 rounded mb-8"
        />

        <br /> <br />

        <h1 className="text-4xl font-bold text-red-600 mb-4">❌ Booking Canceled</h1>
        <p className="text-gray-700 text-lg">Your payment was not completed.</p>
        <p className="mb-6">You can try again or contact us for assistance.</p>

        <br />

        <Link
          href="/services"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition"
        >
          Return to Services
        </Link>
      </div>
    </>
  );
}
