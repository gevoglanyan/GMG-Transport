import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="bg-white text-center py-16 px-4 min-h-screen">
      <img
        src="/images/GMG.png"
        alt="GMG Transportation Logo"
        className="mx-auto w-[90%] max-w-[320px] h-auto"
      />

      <br />

      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Booking Confirmed!</h1>
      <p className="text-gray-700 text-lg mb-6">
         Thank you for choosing GMG Transportation Inc. We’ll be in touch soon.
      </p>

      <Link
        to="/"
        className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
