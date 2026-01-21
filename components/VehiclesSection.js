import React, { useState, useEffect } from 'react';

const vehicleGroups = [
  {
    brand: "Cadillac Escalade",
    vehicles: [
      {
        id: "escalade",
        title: "Escalade ESV",
        subtitle: "The Icon of American Luxury",
        images: ["/images/IMG_4003.png", "/images/IMG_4004.png", "/images/IMG_4005.png", "/images/IMG_4006.png", "/images/IMG_4008.png", "/images/IMG_4009.png"],
        alt: "Cadillac Escalade ESV",
        desc: "Command attention with the legendary Escalade ESV. This isn't just transportation—it's a statement. Extended wheelbase provides first-class legroom, while hand-stitched leather, whisper-quiet cabin acoustics, and cutting-edge technology create an atmosphere of absolute refinement. Perfect for weddings, red carpet arrivals, and C-suite executive travel.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: [
          "Hand-Stitched Premium Leather",
          "Individual Climate Zones",
          "High-Speed WiFi",
          "Privacy Glass",
          "Wireless Charging",
          "Studio-Quality Sound System"
        ],
        rates: {
          minimum: "2 Hours",
          tiers: [
            { duration: "2 – 5 Hours", rate: "$150/Hour" },
            { duration: "6+ Hours", rate: "$125/Hour" }
          ]
        }
      }
    ]
  },
  {
    brand: "Chevrolet Suburban",
    vehicles: [
      {
        id: "suburban",
        title: "Suburban",
        subtitle: "Versatility Meets Sophistication",
        images: ["/images/IMG_2386.png"],
        alt: "Chevrolet Suburban",
        desc: "The trusted choice for families and corporate teams. With three rows of spacious seating and a cavernous cargo area, the Suburban effortlessly handles group travel without compromising on comfort. Whether you're heading to the airport with luggage or organizing team transportation, this American classic delivers reliability wrapped in refined comfort.",
        capacity: "7 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: [
          "Factory Privacy Tinting",
          "Rear Climate Control",
          "USB Fast Charging",
          "Tri-Zone A/C",
          "Flexible Seating",
          "Expansive Cargo Space"
        ],
        rates: {
          minimum: "2 Hours",
          tiers: [
            { duration: "2 – 5 Hours", rate: "$125/Hour" },
            { duration: "6+ Hours", rate: "$100/Hour" }
          ]
        }
      }
    ]
  },
  {
    brand: "GMC Yukon",
    vehicles: [
      {
        id: "yukon-premium",
        title: "Yukon XL",
        subtitle: "Premium Edition",
        images: ["/images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
        alt: "GMC Yukon XL Premium",
        desc: "Experience elevated luxury in the Premium Yukon XL. Plush captain's chairs cradle passengers in comfort while the expansive panoramic sunroof floods the cabin with natural light. Every surface reflects meticulous attention to detail—from ambient lighting that sets the perfect mood to advanced climate control that keeps everyone comfortable. Ideal for executive travel and intimate VIP groups.",
        capacity: "6 Passengers",
        luggage: "5–6 Large Suitcases",
        features: [
          "Captain's Seating",
          "Panoramic Sunroof",
          "Ambient LED Lighting",
          "USB-C Fast Charging",
          "Premium Navigation",
          "Tri-Zone Climate"
        ],
        rates: {
          minimum: "2 Hours",
          tiers: [
            { duration: "2 – 5 Hours", rate: "$150/Hour" },
            { duration: "6+ Hours", rate: "$125/Hour" }
          ]
        }
      },
      {
        id: "yukon-evolution",
        title: "Yukon XL",
        subtitle: "Evolution Series",
        images: ["/images/IMG_7512.jpeg", "/images/IMG_7511.jpeg", "/images/IMG_7510.jpeg", "/images/IMG_7509.jpeg", "/images/IMG_7508.jpeg", "/images/IMG_7507.jpeg", "/images/IMG_7506.jpeg"],
        alt: "GMC Yukon XL Evolution",
        desc: "The Evolution Series represents the pinnacle of modern SUV design. This meticulously appointed Yukon XL combines bold styling with premium comfort features. Sink into luxurious captain's chairs, enjoy the open-air feel of the panoramic sunroof, and stay connected with the latest technology. Perfect for discerning travelers who demand both style and substance.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: [
          "Premium Captain's Chairs",
          "Panoramic Glass Roof",
          "Dynamic Ambient Lighting",
          "Advanced Connectivity",
          "Premium Audio System",
          "Multi-Zone Climate"
        ],
        rates: {
          minimum: "2 Hours",
          tiers: [
            { duration: "2 – 5 Hours", rate: "$150/Hour" },
            { duration: "6+ Hours", rate: "$125/Hour" }
          ]
        }
      },
      {
        id: "yukon-standard",
        title: "Yukon XL",
        subtitle: "Classic Comfort",
        images: ["/images/IMG_5604.jpg", "/images/IMG_5605.jpg", "/images/IMG_5606.jpg", "/images/IMG_5607.jpg", "/images/IMG_5608.jpg", "/images/IMG_5609.jpg", "/images/IMG_5610.jpg"],
        alt: "GMC Yukon XL",
        desc: "The quintessential full-size SUV that does it all. With three rows of genuine comfort and commanding road presence, this Yukon XL is built for the journey. Whether you're shuttling a business team across town or embarking on a long-distance adventure, you'll appreciate the thoughtful layout, smooth ride quality, and versatile seating that adapts to your needs.",
        capacity: "7 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: [
          "Privacy Glass",
          "USB Charging Ports",
          "Individual Climate Controls",
          "Spacious Third Row",
          "Fold-Flat Seating",
          "Premium Sound"
        ],
        rates: {
          minimum: "2 Hours",
          tiers: [
            { duration: "2–5 Hours", rate: "$125/Hour" },
            { duration: "6+ Hours", rate: "$100/Hour" }
          ]
        }
      }
    ]
  }
];

function VehiclesSection() {
  const [lightbox, setLightbox] = useState({ isOpen: false, groupIndex: null, vehicleIndex: null, imageIndex: 0 });

  const handleImageClick = (groupIndex, vehicleIndex, imageIndex) => {
    setLightbox({ isOpen: true, groupIndex, vehicleIndex, imageIndex });
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
        <div className="mb-16">
          <h3 className="heading-lg mb-4">Our Premium Fleet</h3>
          <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-4"></div>
          <p className="text-body max-w-2xl mx-auto">
            Choose from our meticulously maintained luxury vehicles, each offering comfort, style, and reliability.
          </p>
        </div>

        {vehicleGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-20">
            <div className="mb-8">
              <h4 className="text-4xl font-bold text-[var(--color-primary)] mb-2 font-['Playfair_Display']">
                {group.brand}
              </h4>
              <div className="h-0.5 w-16 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              {group.vehicles.map((v, vehicleIndex) => (
                <div 
                  key={vehicleIndex} 
                  className="card flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 animate-slide-in w-full sm:w-80 lg:w-[calc(33.333%-1.5rem)]"
                  style={{ animationDelay: `${vehicleIndex * 0.1}s` }}
                >
                  <div className="relative mb-4 -mx-6 -mt-6">
                    {Array.isArray(v.images) && v.images.length > 0 ? (
                      <div className="relative group">
                        <img
                          src={v.images[0]}
                          alt={v.alt}
                          onClick={() => handleImageClick(groupIndex, vehicleIndex, 0)}
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
                    <div className="mb-3">
                      <h5 className="text-2xl font-bold text-[var(--color-primary)] font-['Playfair_Display']">{v.title}</h5>
                      <p className="text-sm text-[var(--color-accent)] font-semibold tracking-wide uppercase">{v.subtitle}</p>
                    </div>
                    
                    <p className="text-body text-sm mb-4 flex-1 leading-relaxed">{v.desc}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div>
                          <p className="text-xs font-semibold text-[var(--color-text-secondary)] mb-0.5">Capacity</p>
                          <p className="text-sm font-medium">{v.capacity}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <div>
                          <p className="text-xs font-semibold text-[var(--color-text-secondary)] mb-0.5">Luggage</p>
                          <p className="text-sm font-medium">{v.luggage}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)] mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Premium Features
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {v.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-[var(--color-text-muted)] flex items-start gap-1.5">
                            <span className="text-[var(--color-accent)] mt-0.5">•</span>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white p-4 rounded-lg -mx-6 -mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs font-bold uppercase tracking-wider">Hourly Rates</p>
                      </div>
                      <p className="text-xs opacity-90 mb-2">Minimum Booking: {v.rates.minimum}</p>
                      <div className="space-y-1">
                        {v.rates.tiers.map((tier, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="opacity-90">{tier.duration}</span>
                            <span className="font-bold">{tier.rate}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <a href="/services#booking" className="btn-accent inline-block hover:scale-105 transition-transform">
            Book Your Vehicle Now
          </a>
        </div>

        {lightbox.isOpen && lightbox.groupIndex !== null && lightbox.vehicleIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
              <img
                src={vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images[lightbox.imageIndex]}
                alt=""
                className="max-h-[90vh] max-w-[90vw] sm:max-h-[80vh] sm:max-w-4xl object-contain rounded-lg shadow-2xl"
              />
              
              <button
                onClick={() => setLightbox({ isOpen: false, groupIndex: null, vehicleIndex: null, imageIndex: 0 })}
                className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightbox(prev => ({
                        ...prev,
                        imageIndex:
                          (prev.imageIndex - 1 + vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length) %
                          vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length,
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
                          (prev.imageIndex + 1) % vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length,
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
                {lightbox.imageIndex + 1} / {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VehiclesSection;