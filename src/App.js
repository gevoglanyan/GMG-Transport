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
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
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
    capacity: "Up to 6 passengers",
    luggage: "4–5 suitcases",
    amenities: "Wi-Fi, bottled water, leather seats, climate control"
  },
  {
    title: "Chevy Suburban",
    image: "/images/Surburban.png",
    alt: "Chevy Suburban",
    desc: "Ideal for larger groups and luggage, the Suburban offers comfort, safety, and flexibility for long trips or corporate rides.",
    capacity: "Up to 7 passengers",
    luggage: "6–7 suitcases",
    amenities: "Wi-Fi, charging ports, climate control, tinted windows"
  },
  {
    title: "GMC Yukon",
    image: "/images/Yukon.png",
    alt: "GMC Yukon",
    desc: "A versatile SUV that balances comfort and capability—great for family travel, group outings, or upscale business commutes.",
    capacity: "Up to 6 passengers",
    luggage: "5–6 suitcases",
    amenities: "Wi-Fi, premium sound, refreshments, climate control"
  }
];

function VehiclesSection() {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (index) => {
    setVisibleDetails(visibleDetails === index ? null : index);
  };

  return (
    <section id="vehicles" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-black-700 mb-12">Our Vehicles</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="shadow rounded overflow-hidden bg-gray-50 flex flex-col justify-between min-h-[520px]"
            >
              <img src={v.image} alt={v.alt} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                  <p className="text-gray-700 mb-3">{v.desc}</p>

                  {visibleDetails === i && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      <li><strong>Passenger Capacity:</strong> {v.capacity}</li>
                      <li><strong>Luggage:</strong> {v.luggage}</li>
                      <li><strong>Amenities:</strong> {v.amenities}</li>
                    </ul>
                  )}
                </div>
                <div className="flex space-x-3 mt-auto">
                  <a
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                  >
                    Book Now
                  </a>
                  <button
                    onClick={() => toggleDetails(i)}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded text-sm font-medium transition"
                  >
                    {visibleDetails === i ? 'Hide Details' : 'Details'}
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
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">GMG Transport Inc</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#vehicles" className="hover:text-white">Vehicles</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="bg-white h-[60vh] flex items-center">
        <div className="max-w-3xl mx-auto px-6 text-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-4">Luxury Services</h2>
          <p className="text-lg mb-6">Professional, reliable, and elegant transportation for every occasion.</p>
          <br />
          <a href="#contact" className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-500 transition">Book a Ride</a>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-10">Our Premium Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Luxury Airport Transfers</h4>
              <p>
                Arrive in style with our punctual, comfortable, and hassle-free airport pick-ups and drop-offs in premium vehicles.
              </p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Executive & Corporate Travel</h4>
              <p>
                Impress clients and colleagues with our discreet, professional chauffeur services designed for business travelers.
              </p>
            </div>
            <div className="p-6 shadow rounded bg-gray-50">
              <h4 className="text-xl font-bold mb-2">Special Occasions & Events</h4>
              <p>
                Celebrate weddings, parties, or nights out with elegant and luxurious rides that make every event unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-black-700 mb-6">About GMG Transport Inc</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            GMG Transport Inc is dedicated to delivering top-tier transportation services with elegance, professionalism, and reliability. With a fleet of premium vehicles and experienced chauffeurs, we ensure that your ride is not just a journey—but an experience.
          </p>
        </div>
      </section>

      <VehiclesSection/>
      
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black-700">Contact Us</h3>
          <p className="text-gray-700 mb-8">
            Ready to ride in style? 
            Get in touch to book your luxury transportation today.
          </p>

          <ContactForm />

          <p className="mt-8 text-gray-600">
            Or call us directly at <a href="tel:+1234567890" className="text-blue-600 font-medium hover:underline">+1 (323) 841-5151</a>
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; {new Date().getFullYear()} GMG Transport Inc. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
