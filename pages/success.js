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

      <div className="bg-white text-center py-16 px-4 min-h-screen">
        <img
          src="/images/GMG.png"
          alt="GMG Transportation Logo"
          className="mx-auto w-[90%] max-w-[350px] h-auto border-4 border-gray-800 rounded mb-8"
        />

        <br /> <br />

        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Booking Confirmed!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for choosing GMG Transportation Inc. We’ll be in touch soon.
        </p>

        <br />

        <Link
          href="/"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
}
