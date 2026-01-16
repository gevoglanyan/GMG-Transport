import React, { useState, useEffect } from 'react';

const vehicles = [
  {
    id: "escalade",
    title: "Cadillac Escalade ESV",
    images: ["/images/IMG_4003.png", "/images/IMG_4004.png", "/images/IMG_4005.png", "/images/IMG_4006.png", "/images/IMG_4008.png", "/images/IMG_4009.png"],
    alt: "Cadillac Escalade",
    desc: "Make a bold entrance in the iconic Cadillac Escalade ESV — where power meets prestige. Ideal for weddings, VIP airport service, or corporate executive travel, this full-sized luxury SUV features an extended cabin for maximum legroom, high-end leather seating, and a smooth, quiet ride.",
    capacity: "Up to 6 passengers",
    luggage: "5–6 large bags",
    amenities: "Premium Leather Interior, Rear Climate Controls, WiFi, Privacy-Tinted Windows, Phone Charging Ports, Premium Sound System",
    rates: `Minimum of 2 Hours
            2–5 Hours: $150/hr
            6+ Hours: $125/hr`
  },
  {
    id: "suburban",
    title: "Chevrolet Suburban",
    images: ["/images/IMG_2386.png"],
    alt: "Chevy Suburban",
    desc: "Dependable and spacious, the Chevy Suburban offers exceptional comfort and storage. It's the perfect ride for families, groups with luggage, or team travel. With versatile seating, climate control, and smooth handling, it's designed for long rides and day-to-day executive transport alike.",
    capacity: "Up to 7 passengers",
    luggage: "5–6 large bags",
    amenities: "Tinted Windows, Rear A/C Vents, USB Charging Cables, Spacious Trunk, Bench or Captain Seat Configurations",
    rates: `Minimum of 2 Hours
            2–5 Hours: $125/hr
            6+ Hours: $100/hr`
  },
  {
    id: "yukon-premium",
    title: "GMC Yukon XL (Premium)",
    images: ["/images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
    alt: "GMC Yukon Premium",
    desc: "For those who want style with substance, the premium Yukon XL delivers. Featuring luxurious captain's chairs, an extra-large panoramic sunroof, and refined materials throughout, it's built for first-class experiences. Ideal for business travelers, couples, or small VIP groups.",
    capacity: "Up to 6 passengers",
    luggage: "5–6 large bags",
    amenities: "Captain's Chairs, Panoramic Sunroof, Ambient Interior Lighting, USB-C Ports, HD Navigation System, Tri-Zone Climate Control",
    rates: `Minimum of 2 Hours
            2–5 Hours: $150/hr
            6+ Hours: $125/hr`
  },
  {
    id: "yukon-evolution",
    title: "GMC Yukon XL (Evolution)",
    images: ["/images/IMG_7512.jpeg", "/images/IMG_7511.jpeg", "/images/IMG_7510.jpeg", "/images/IMG_7509.jpeg", "/images/IMG_7508.jpeg", "/images/IMG_7507.jpeg", "/images/IMG_7506.jpeg"],
    alt: "GMC Yukon Premium",
    desc: "For those who want style with substance, the premium Yukon XL delivers. Featuring luxurious captain's chairs, an extra-large panoramic sunroof, and refined materials throughout, it's built for first-class experiences. Ideal for business travelers, couples, or small VIP groups.",
    capacity: "Up to 6 passengers",
    luggage: "5–6 large bags",
    amenities: "Captain's Chairs, Panoramic Sunroof, Ambient Interior Lighting, USB-C Ports, HD Navigation System, Tri-Zone Climate Control",
    rates: `Minimum of 2 Hours
            2–5 Hours: $150/hr
            6+ Hours: $125/hr`
  },
  {
    id: "yukon-standard",
    title: "GMC Yukon XL",
    images: ["/images/IMG_5604.jpg", "/images/IMG_5605.jpg", "/images/IMG_5606.jpg", "/images/IMG_5607.jpg", "/images/IMG_5608.jpg", "/images/IMG_5609.jpg", "/images/IMG_5610.jpg"],
    alt: "GMC Yukon",
    desc: "Spacious, stylish, and reliable — the standard Yukon XL offers roomy seating and a powerful drive, making it great for both long-distance travel and local event shuttles. It's a customer favorite for airport runs, business groups, and casual bookings alike.",
    capacity: "Up to 7 passengers",
    luggage: "5–6 large bags",
    amenities: "Tinted Windows, USB Ports, Rear Seat Controls, Spacious Third Row, Fold-Flat Seating",
    rates: `Minimum of 2 Hours
            2–5 Hours: $125/hr
            6+ Hours: $100/hr`
  }
];

function VehiclesSection() {
  const [imageIndexes] = useState({});
  const [lightbox, setLightbox] = useState({ isOpen: false, vehicleIndex: null, imageIndex: 0 });

  const handleImageClick = (vehicleIndex, imageIndex) => {
    setLightbox({ isOpen: true, vehicleIndex, imageIndex });
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.isOpen]);

  return (
    <section id="vehicles" className="section-padding bg-gradient-to-b from-white to-[var(--color-bg)]">
      <div className="container-wide text-center animate-fade-in">
        <div className="mb-12">
          <h3 className="heading-lg mb-4">Our Premium Fleet</h3>
          <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-4"></div>
          <p className="text-body max-w-2xl mx-auto">
            Choose from our meticulously maintained luxury vehicles, each offering comfort, style, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((v, i) => (
            <div 
              key={i} 
              className="card flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative mb-4 -mx-6 -mt-6">
                {Array.isArray(v.images) && v.images.length > 0 ? (
                  <div className="relative group">
                    <img
                      src={v.images[0]}
                      alt={v.alt}
                      onClick={() => handleImageClick(i, 0)}
                      className="w-full h-56 sm:h-60 object-cover rounded-t-xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-xl flex items-center justify-center pointer-events-none">
                      <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-56 sm:h-60 flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded-t-xl">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 text-left">
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 font-['Playfair_Display']">{v.title}</h4>
                
                <p className="text-body text-sm mb-4 flex-1">{v.desc}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Capacity</p>
                      <p className="text-sm font-medium">{v.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)]">Luggage</p>
                      <p className="text-sm font-medium">{v.luggage}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                  <p className="text-xs font-semibold text-[var(--color-text-secondary)] mb-2">Amenities</p>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{v.amenities}</p>
                </div>

                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white p-4 rounded-lg -mx-6 -mb-6">
                  <p className="text-xs font-semibold mb-2 text-[var(--color-accent)]">Rates</p>
                  <p className="text-xs leading-relaxed whitespace-pre-line">{v.rates}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/services#booking" className="btn-accent inline-block hover:scale-105 transition-transform">
            Book Your Vehicle Now
          </a>
        </div>

        {lightbox.isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
              <img
                src={vehicles[lightbox.vehicleIndex].images[lightbox.imageIndex]}
                alt=""
                className="max-h-[90vh] max-w-[90vw] sm:max-h-[80vh] sm:max-w-4xl object-contain rounded-lg shadow-2xl"
              />
              
              <button
                onClick={() => setLightbox({ isOpen: false, vehicleIndex: null, imageIndex: 0 })}
                className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {vehicles[lightbox.vehicleIndex].images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightbox(prev => ({
                        ...prev,
                        imageIndex:
                          (prev.imageIndex - 1 + vehicles[prev.vehicleIndex].images.length) %
                          vehicles[prev.vehicleIndex].images.length,
                      }))
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setLightbox(prev => ({
                        ...prev,
                        imageIndex:
                          (prev.imageIndex + 1) % vehicles[prev.vehicleIndex].images.length,
                      }))
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 px-4 py-2 rounded-full text-white text-sm">
                {lightbox.imageIndex + 1} / {vehicles[lightbox.vehicleIndex].images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VehiclesSection;