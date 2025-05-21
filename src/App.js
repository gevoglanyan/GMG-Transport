import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
    title: "Cadillac Escalade",
    image: "/images/Escalade.png",
    alt: "Cadillac Escalade",
    desc: "Ride in bold elegance with the Cadillac Escalade—perfect for weddings, red carpet events, and VIP airport pickups.",
    capacity: "Up to 7",
    luggage: "5-6",
    rates: "$125/hr - 3 Hours Minimum"
  },
  {
    title: "Chevy Suburban",
    image: "/images/Surburban.png",
    alt: "Chevy Suburban",
    desc: "Ideal for larger groups and luggage, the Suburban offers comfort, safety, and flexibility for long trips or corporate rides.",
    capacity: "Up to 7",
    luggage: "5-6",
    rates: "$115/hr - 3 Hours Minimum"
  },
  {
    title: "GMC Yukon",
    image: "/images/Yukon.png",
    alt: "GMC Yukon",
    desc: "A versatile SUV that balances comfort and capability—great for family travel, group outings, or upscale business commutes.",
    capacity: "Up to 7",
    luggage: "5–6",
    rates: "$115/hr - 3 Hours Minimum"
  }
];

function VehiclesSection() {
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [visibleRates, setVisibleRates] = useState(null);

  const toggleDetails = (index) => {
    setVisibleDetails(visibleDetails === index ? null : index);
  };

  const toggleRates = (index) => {
    setVisibleRates(visibleRates === index ? null : index);
  };

  return (
    <section id="vehicles" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-semibold text-black-700 mb-12">Our Vehicles</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="shadow rounded overflow-hidden bg-gray-50 flex flex-col justify-between min-h-[520px]"
            >
              <img
                src={v.image}
                alt={v.alt}
                className="w-full h-56 sm:h-60 object-contain p-2"
              />
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-gray-700 mb-3">{v.desc}</p>

                  {visibleDetails === i && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      <li><strong>Passenger Capacity:</strong> {v.capacity}</li>
                      <li><strong>Luggage:</strong> {v.luggage}</li>
                    </ul>
                  )}

                  {visibleRates === i && (
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Rates:</strong> {v.rates}. Rates are negotiable.
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href="#contact"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    Book Now
                  </a>

                  <button
                    onClick={() => toggleDetails(i)}
                    className="border border-gray-800 text-gray-800 hover:bg-blue-50 px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {visibleDetails === i ? 'Hide Details' : 'Details'}
                  </button>

                  <button
                    onClick={() => toggleRates(i)}
                    className="border border-gray-800 text-gray-800 hover:bg-blue-50 px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {visibleRates === i ? 'Hide Rates' : 'Rates'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-800 scroll-smooth">
      <header className="bg-gray-800 shadow-md w-full px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white text-center sm:text-left">
            GMG Transportation Inc
          </h1>

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
            <a href="#vehicles" className="hover:text-white">Vehicles</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

        </div>

        {menuOpen && (
          <div className="block sm:hidden mt-2 px-4 space-y-2 text-sm font-medium text-gray-300">
            <br />
            <a href="#home" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="block hover:text-white" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#vehicles" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Vehicles</a>
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

          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6">Professional, reliable, and elegant transportation for every occasion.</p>

          <a href="#vehicles" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-4">
            View Vehicles
          </a>

          <a href="#contact" className="bg-gray-800 px-6 py-3 rounded text-white font-semibold hover:bg-gray-900 transition block w-max mx-auto mb-8">
            Book a Ride
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

      <section id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">
            Ready to ride in style? Get in touch to book your luxury transportation today.
          </p>

          <ContactForm />

          <p className="mt-8 text-gray-600">
            Or call us directly at <a href="tel:+14243332293" className="text-gray-800 font-medium hover:underline"><br />+1 (424) 333-2293</a>
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

export default App;
