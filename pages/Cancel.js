import { Link } from 'react-router-dom';

export default function Cancel() {
  return (
    <div className="bg-white text-center py-16 px-4 min-h-screen">
      <img
        src="/images/GMG.png"
        alt="GMG Transportation Logo"
        className="mx-auto w-[90%] max-w-[320px] h-auto"
      />

      <br />

      <h1 className="text-4xl font-bold text-red-600 mb-4">❌ Booking Canceled</h1>
      <p className="text-gray-700 text-lg">Your payment was not completed.</p>
      <p className="mb-6">You can try again or contact us for assistance.</p>

      <Link
        to="/"
        className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition"
      >
         Return to Homepage
      </Link>
    </div>
  );
}
