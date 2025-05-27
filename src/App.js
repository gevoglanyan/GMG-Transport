import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Booking from './components/booking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './pages/success';
import Cancel from './pages/cancel';

function ContactForm() {
  const [state, handleSubmit] = useForm("mblobbgk"); 

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
      <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phone" className="block font-medium text-gray-700">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        placeholder="Your message here..."
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition w-full"
      >
        Send Message
      </button>
    </form>
  );
}

const vehicles = [
  {
    id: "escalade",
    title: "Cadillac Escalade",
    images: ["images/IMG_4003.png", "/images/IMG_4004.png", "/images/IMG_4005.png", "/images/IMG_4006.png", "/images/IMG_4008.png", "/images/IMG_4009.png"],
    alt: "Cadillac Escalade",
    desc: "Ride in bold elegance with the Cadillac Escalade—perfect for weddings, red carpet events, and VIP airport pickups.",
    capacity: "Up to 6",
    luggage: "5-6",
    amenities: "Tinted Windows, WiFi",
    rates: `Minimum of 2 Hours
            2–5 Hours: $150/hr
            6+ Hours: $125/hr`
  },
  {
    id: "suburban",
    title: "Chevy Suburban",
    images: ["/images/IMG_2386.png"],
    alt: "Chevy Suburban",
    desc: "Ideal for larger groups and luggage, it offers comfort, safety, and flexibility for long trips or corporate rides.",
    capacity: "Up to 7",
    luggage: "5-6",
    amenities: "Tinted Windows, Charging Cables",
    rates: `Minimum of 2 Hours
            2-5 Hours: $125/hr
            6+ Hours: $100/hr`
  },
  {
    id: "yukon-premium",
    title: "GMC Yukon (Premium)",
    images: ["images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
    alt: "GMC Yukon",
    desc: "A versatile SUV that balances comfort and capability—great for family travel, group outings, or upscale business commutes.",
    capacity: "Up to 6",
    luggage: "5-6",
    amenities: "Captain Seats, Panarmoic Roof",
    rates: `Minimum of 2 Hours
            2-5 Hours: $150/hr
            6+ Hours: $125/hr`
  },
  {
    id: "yukon-standard",
    title: "GMC Yukon",
    images: ["images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
    alt: "GMC Yukon",
    desc: "A versatile SUV that balances comfort and capability—great for family travel, group outings, or upscale business commutes.",
    capacity: "Up to 7",
    luggage: "5–6",
    amenities: "Tinted Windows, Charging Cables",
    rates: `Minimum of 2 Hours
            2-5 Hours: $125/hr
            6+ Hours: $100/hr`
  }
];

function VehiclesSection() {
  const [visibleDetails, setVisibleDetails] = useState({});
  const [visibleRates, setVisibleRates] = useState({});
  const [showBookingIndex, setShowBookingIndex] = useState(null);
  const [imageIndexes] = useState({});
  const [lightbox, setLightbox] = useState({ isOpen: false, vehicleIndex: null, imageIndex: 0 });

  const toggleDetails = (index) => {
    setVisibleDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleRates = (index) => {
    setVisibleRates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleBooking = (index) => {
    setShowBookingIndex(showBookingIndex === index ? null : index);
  };

  const handleImageClick = (vehicleIndex, imageIndex) => {
    setLightbox({ isOpen: true, vehicleIndex, imageIndex });
  };

  useEffect(() => {
  if (lightbox.isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [lightbox.isOpen]);

  return (
    <section id="vehicles" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-semibold text-black-700 mb-12">Our Fleet</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="shadow rounded overflow-hidden bg-gray-50 flex flex-col justify-between min-h-[520px]"
            >
              <div className="relative">
                {Array.isArray(v.images) && v.images.length > 0 ? (
                  <img
                    src={v.images[imageIndexes[i] || 0]}
                    alt={v.alt}
                    onClick={() => handleImageClick(i, imageIndexes[i] || 0)}
                    className="w-full h-56 sm:h-60 object-contain p-2 cursor-pointer"
                  />
                ) : (
                  <div className="w-full h-56 sm:h-60 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 text-left h-full">
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-gray-700 mb-3">{v.desc}</p>

                  <div className={`min-h-[24px] ${visibleDetails[i] ? 'mb-3' : 'mb-1'}`}>
                    {visibleDetails[i] && (
                      <ul className="text-sm text-gray-600 space-y-1">
                        <br />
                        <li><strong>Passenger Capacity:</strong> {v.capacity}</li>
                        <li><strong>Luggage:</strong> {v.luggage}</li>
                        <li><strong>Amenities:</strong> {v.amenities}</li>
                      </ul>
                    )}
                  </div>

                  <div className={`min-h-[32px] ${visibleRates[i] ? 'mb-3' : 'mb-1'}`}>
                    {visibleRates[i] && (
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        <br />
                        <strong>Rates:</strong> {v.rates}
                        <br /> <br />
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <button
                    onClick={() => toggleBooking(i)}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {showBookingIndex === i ? 'Close Booking' : 'Book Now'}
                  </button>

                  <button
                    onClick={() => toggleDetails(i)}
                    className="border border-gray-800 text-gray-800 hover:bg-blue-50 px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {visibleDetails[i] ? 'Hide Details' : 'Details'}
                  </button>

                  <button
                    onClick={() => toggleRates(i)}
                    className="border border-gray-800 text-gray-800 hover:bg-blue-50 px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {visibleRates[i] ? 'Hide Rates' : 'Rates'}
                  </button>
                </div>

                {showBookingIndex === i && (
                  <div className="mt-6 border-t pt-4">
                    <Booking vehicle={v} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {lightbox.isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
              <img
                src={vehicles[lightbox.vehicleIndex].images[lightbox.imageIndex]}
                alt=""
                className="max-h-[90vh] max-w-[90vw] sm:max-h-[80vh] sm:max-w-3xl object-contain rounded shadow-lg"
              />

              <button
                onClick={() => setLightbox({ isOpen: false, vehicleIndex: null, imageIndex: 0 })}
                className="absolute top-4 right-4 text-white text-4xl font-bold z-10"
                aria-label="Close"
              >
                ×
              </button>

              {vehicles[lightbox.vehicleIndex].images.length > 1 && (
                <button
                  onClick={() =>
                    setLightbox(prev => ({
                      ...prev,
                      imageIndex:
                        (prev.imageIndex - 1 + vehicles[prev.vehicleIndex].images.length) %
                        vehicles[prev.vehicleIndex].images.length,
                    }))
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}

              {vehicles[lightbox.vehicleIndex].images.length > 1 && (
                <button
                  onClick={() =>
                    setLightbox(prev => ({
                      ...prev,
                      imageIndex:
                        (prev.imageIndex + 1) % vehicles[prev.vehicleIndex].images.length,
                    }))
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10"
                  aria-label="Next"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-800 scroll-smooth">
      <header className="bg-gray-800 shadow-md w-full px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap text-center sm:text-left">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white">
              GMG Transportation Inc
            </h1>
            <a
              href="tel:+14243332293"
              className="text-white text-sm font-medium hover:underline mt-1 block"
            >
              +1 (424) 333-2293
            </a>
          </div>

          <button
            className="block sm:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-300 font-sans">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#vehicles" className="hover:text-white">Fleet</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>

        {menuOpen && (
          <div className="block sm:hidden mt-2 px-4 space-y-2 text-sm font-medium text-gray-300">
            <br />
            <a href="#home" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="block hover:text-white" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#vehicles" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Fleet</a>
            <a href="#faqs" className="block hover:text-white" onClick={() => setMenuOpen(false)}>FAQs</a>
            <a href="#reviews" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
            
            <br />

          </div>
        )}
      </header>

      <section id="home" className="bg-white h-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto px-6 text-gray-800 text-center">
          <img
            src="/images/GMG.png"
            alt="GMG Transportation Logo"
            className="mx-auto w-[90%] max-w-[320px] h-auto"
          />

          <br />

          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6">Professional, reliable, and elegant transportation for every occasion.</p>

          <a href="#vehicles" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-8">
            Book a Ride
          </a>

           <a href="#contact" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-4">
            Contact Us
          </a>
        </div>
      </section>

      <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-10">Our Premium Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Luxury Airport Transfers</h4>
              <p>Arrive in style with our punctual, comfortable, and hassle-free airport pick-ups and drop-offs in premium vehicles.</p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Executive & Corporate Travel</h4>
              <p>Impress clients and colleagues with our discreet, professional chauffeur services designed for business travelers.</p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Special Occasions & Events</h4>
              <p>Celebrate weddings, parties, or nights out with elegant and luxurious rides that make every event unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-6">About GMG Transportion Inc</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            GMG Transportion Inc is dedicated to delivering top-tier transportation services with elegance, professionalism, and reliability. With a fleet of premium vehicles and experienced chauffeurs, we ensure that your ride is not just a journey but an experience.
          </p>
        </div>
      </section>

      <VehiclesSection />

      <br />

      <section id="faqs" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <h3 className="text-3xl font-semibold text-black-700 mb-8 text-center">Frequently Asked Questions</h3>

          <br />

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is your minimum booking time?</h4>
              <p className="text-gray-700 mt-1">We require a minimum of 2 hours per booking for all vehicles.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do your rates include the driver?</h4>
              <p className="text-gray-700 mt-1">Yes. All bookings include a professional chauffeur as part of the rate.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Do you provide airport pickups?</h4>
              <p className="text-gray-700 mt-1">Absolutely. We track your flight and ensure timely curbside pickup or meet-and-greet inside the terminal.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">Can I book for long distance travel?</h4>
              <p className="text-gray-700 mt-1">Yes. While we’re based locally, we accommodate long-distance trips. Please use the contact form for a custom quote.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800">What is your cancellation policy?</h4>
              <p className="text-gray-700 mt-1">Cancellations made at least 24 hours before pickup are fully refundable. Cancellations within 24 hours may incur a charge.</p>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section id="reviews" className="bg-white-50 py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">What Our Clients Say</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="italic text-gray-700">“We used GMG for our wedding and they were flawless — clean, on time, and professional.”</blockquote>
          <p className="text-sm font-semibold text-gray-800"> — Harut, Los Angeles</p>
        </div>

        <br /> <br />

        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="italic text-gray-700">“We used GMG for our wedding and they were flawless — clean, on time, and professional.”</blockquote>
          <p className="text-sm font-semibold text-gray-800"> — Grigor, Los Angeles</p>
        </div>
      </section>

      <br /> 

      <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">
            Have questions about our services? Contact us today — we’re here to help.
          </p>

          <ContactForm />

          <p className="mt-8 text-gray-600">
            Or call us directly at <a href="tel:+14243332293" className="text-green-600 font-medium hover:underline"><br />+1 (424) 333-2293</a>
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; {new Date().getFullYear()} GMG Transportation Inc.
        <span className="block md:inline md:ml-2">
          <br className="block md:hidden" />
          All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
