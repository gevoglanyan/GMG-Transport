import React, { useState, useEffect } from 'react';
import Booking from './Booking';

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
    images: ["images/IMG_5604.jpg", "/images/IMG_5605.jpg", "/images/IMG_5606.jpg", "/images/IMG_5607.jpg", "/images/IMG_5608.jpg", "/images/IMG_5609.jpg", "/images/IMG_5610.jpg"],
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

export default VehiclesSection;