import React, { useState, useEffect } from 'react';

const vehicleGroups = [
  {
    category: "6-Passenger Luxury Vehicles",
    vehicles: [
      {
        id: "escalade",
        brand: "Cadillac",
        title: "Escalade ESV",
        subtitle: "The Icon of American Luxury",
        images: ["/images/IMG_4003.png", "/images/IMG_4004.png", "/images/IMG_4005.png", "/images/IMG_4006.png", "/images/IMG_4008.png", "/images/IMG_4009.png"],
        alt: "Cadillac Escalade ESV",
        desc: "Command attention with the legendary Escalade ESV. This isn't just transportation—it's a statement. Extended wheelbase provides first-class legroom, while hand-stitched leather, whisper-quiet cabin acoustics, and cutting-edge technology create an atmosphere of absolute refinement. Perfect for weddings, red carpet arrivals, and C-suite executive travel.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: ["Hand-Stitched Premium Leather", "Individual Climate Zones", "High-Speed WiFi", "Privacy Glass", "Wireless Charging", "Studio-Quality Sound System"],
        rates: { minimum: "2 Hours", tiers: [{ duration: "2 – 5 Hours", rate: "$150/Hour" }, { duration: "6+ Hours", rate: "$125/Hour" }] }
      },
      {
        id: "yukon-premium",
        brand: "GMC",
        title: "Yukon XL",
        subtitle: "Premium Edition",
        images: ["/images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
        alt: "GMC Yukon XL Premium",
        desc: "Experience elevated luxury in the Premium Yukon XL. Plush captain's chairs cradle passengers in comfort while the expansive panoramic sunroof floods the cabin with natural light. Every surface reflects meticulous attention to detail—from ambient lighting that sets the perfect mood to advanced climate control that keeps everyone comfortable.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: ["Captain's Seating", "Panoramic Sunroof", "Ambient LED Lighting", "USB-C Fast Charging", "Premium Navigation", "Tri-Zone Climate"],
        rates: { minimum: "2 Hours", tiers: [{ duration: "2 – 5 Hours", rate: "$150/Hour" }, { duration: "6+ Hours", rate: "$125/Hour" }] }
      },
      {
        id: "yukon-evolution",
        brand: "GMC",
        title: "Yukon XL",
        subtitle: "Evolution Series",
        images: ["/images/IMG_7512.jpeg", "/images/IMG_7511.jpeg", "/images/IMG_7510.jpeg", "/images/IMG_7509.jpeg", "/images/IMG_7508.jpeg", "/images/IMG_7507.jpeg", "/images/IMG_7506.jpeg"],
        alt: "GMC Yukon XL Evolution",
        desc: "The Evolution Series represents the pinnacle of modern SUV design. This meticulously appointed Yukon XL combines bold styling with premium comfort features. Sink into luxurious captain's chairs, enjoy the open-air feel of the panoramic sunroof, and stay connected with the latest technology.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: ["Premium Captain's Chairs", "Panoramic Glass Roof", "Dynamic Ambient Lighting", "Advanced Connectivity", "Premium Audio System", "Multi-Zone Climate"],
        rates: { minimum: "2 Hours", tiers: [{ duration: "2 – 5 Hours", rate: "$150/Hour" }, { duration: "6+ Hours", rate: "$125/Hour" }] }
      }
    ]
  },
  {
    category: "7-Passenger Luxury Vehicles",
    vehicles: [
      {
        id: "suburban",
        brand: "Chevrolet",
        title: "Suburban",
        subtitle: "Versatility Meets Sophistication",
        images: ["/images/IMG_2386.png"],
        alt: "Chevrolet Suburban",
        desc: "The trusted choice for families and corporate teams. With three rows of spacious seating and a cavernous cargo area, the Suburban effortlessly handles group travel without compromising on comfort. Whether you're heading to the airport with luggage or organizing team transportation, this American classic delivers reliability wrapped in refined comfort.",
        capacity: "7 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: ["Factory Privacy Tinting", "Rear Climate Control", "USB Fast Charging", "Tri-Zone A/C", "Flexible Seating", "Expansive Cargo Space"],
        rates: { minimum: "2 Hours", tiers: [{ duration: "2 – 5 Hours", rate: "$125/Hour" }, { duration: "6+ Hours", rate: "$100/Hour" }] }
      },
      {
        id: "yukon-standard",
        brand: "GMC",
        title: "Yukon XL",
        subtitle: "Classic Comfort",
        images: ["/images/IMG_5604.jpg", "/images/IMG_5605.jpg", "/images/IMG_5606.jpg", "/images/IMG_5607.jpg", "/images/IMG_5608.jpg", "/images/IMG_5609.jpg", "/images/IMG_5610.jpg"],
        alt: "GMC Yukon XL",
        desc: "The quintessential full-size SUV that does it all. With three rows of genuine comfort and commanding road presence, this Yukon XL is built for the journey. Whether you're shuttling a business team across town or embarking on a long-distance adventure, you'll appreciate the thoughtful layout, smooth ride quality, and versatile seating.",
        capacity: "7 Passengers",
        luggage: "5 – 6 Large Suitcases",
        features: ["Privacy Glass", "USB Charging Ports", "Individual Climate Controls", "Spacious Third Row", "Fold-Flat Seating", "Premium Sound"],
        rates: { minimum: "2 Hours", tiers: [{ duration: "2–5 Hours", rate: "$125/Hour" }, { duration: "6+ Hours", rate: "$100/Hour" }] }
      }
    ]
  }
];

function VehiclesSection() {
  const [lightbox, setLightbox] = useState({ isOpen: false, groupIndex: null, vehicleIndex: null, imageIndex: 0 });
  const [expandedDetails, setExpandedDetails] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleImageClick = (groupIndex, vehicleIndex, imageIndex) => {
    setLightbox({ isOpen: true, groupIndex, vehicleIndex, imageIndex });
  };

  const toggleDetails = (groupIndex, vehicleIndex) => {
    const key = `${groupIndex}-${vehicleIndex}`;
    setExpandedDetails(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isDetailsExpanded = (groupIndex, vehicleIndex) => {
    return expandedDetails[`${groupIndex}-${vehicleIndex}`] || false;
  };

  const getCurrentImageIndex = (groupIndex, vehicleIndex) => {
    return currentImageIndex[`${groupIndex}-${vehicleIndex}`] || 0;
  };

  const setImageIndex = (groupIndex, vehicleIndex, index) => {
    const key = `${groupIndex}-${vehicleIndex}`;
    setCurrentImageIndex(prev => ({ ...prev, [key]: index }));
  };

  const handlePrevImage = (e, groupIndex, vehicleIndex, imagesLength) => {
    e.stopPropagation();
    const cur = getCurrentImageIndex(groupIndex, vehicleIndex);
    setImageIndex(groupIndex, vehicleIndex, (cur - 1 + imagesLength) % imagesLength);
  };

  const handleNextImage = (e, groupIndex, vehicleIndex, imagesLength) => {
    e.stopPropagation();
    const cur = getCurrentImageIndex(groupIndex, vehicleIndex);
    setImageIndex(groupIndex, vehicleIndex, (cur + 1) % imagesLength);
  };

  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove  = (e) => { setTouchEnd(e.targetTouches[0].clientX); };

  const onTouchEnd = (groupIndex, vehicleIndex, imagesLength) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < minSwipeDistance) return;
    const cur = getCurrentImageIndex(groupIndex, vehicleIndex);
    if (distance > 0) setImageIndex(groupIndex, vehicleIndex, (cur + 1) % imagesLength);
    else setImageIndex(groupIndex, vehicleIndex, (cur - 1 + imagesLength) % imagesLength);
  };

  const onLightboxTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onLightboxTouchMove  = (e) => { setTouchEnd(e.targetTouches[0].clientX); };

  const onLightboxTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < minSwipeDistance) return;
    setLightbox(prev => {
      const len = vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length;
      return { ...prev, imageIndex: distance > 0 ? (prev.imageIndex + 1) % len : (prev.imageIndex - 1 + len) % len };
    });
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.isOpen]);

  useEffect(() => {
    const preventDefault = (e) => { if (e.touches.length > 1) e.preventDefault(); };
    document.addEventListener('touchstart', preventDefault, { passive: false });
    return () => document.removeEventListener('touchstart', preventDefault);
  }, []);

  return (
    <section id="vehicles" className="section-padding bg-gradient-to-b from-white to-[var(--color-bg)]">
      <div className="container-wide text-center animate-fade-in">
        <div className="mb-12 md:mb-16">
          <span className="section-label mb-3 inline-flex">Our Fleet</span>
          <h1 className="heading-lg mb-4">Premium Vehicles</h1>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-body-lg max-w-2xl mx-auto">
            Choose from our meticulously maintained luxury vehicles, each offering comfort, style, and reliability.
          </p>
        </div>

        {vehicleGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16 md:mb-20">
            <div className="mb-8 text-center">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {group.category}
              </h2>
              <div className="gold-divider mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {group.vehicles.map((v, vehicleIndex) => (
                <div
                  key={vehicleIndex}
                  className="card flex flex-col hover:scale-[1.01] transition-all duration-300 animate-slide-in text-left"
                  style={{ animationDelay: `${vehicleIndex * 0.1}s` }}
                >
                  <div className="relative -mx-6 -mt-6 mb-4">
                    {Array.isArray(v.images) && v.images.length > 0 ? (
                      <div
                        className="relative group touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={() => onTouchEnd(groupIndex, vehicleIndex, v.images.length)}
                      >
                        <img
                          src={v.images[getCurrentImageIndex(groupIndex, vehicleIndex)]}
                          alt={v.alt}
                          onClick={() => handleImageClick(groupIndex, vehicleIndex, getCurrentImageIndex(groupIndex, vehicleIndex))}
                          className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-t-[var(--radius-xl)] cursor-pointer select-none transition-transform duration-300"
                          draggable="false"
                        />

                        {v.images.length > 1 && (
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {getCurrentImageIndex(groupIndex, vehicleIndex) + 1}/{v.images.length}
                          </div>
                        )}

                        {v.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => handlePrevImage(e, groupIndex, vehicleIndex, v.images.length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
                              aria-label="Previous image"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => handleNextImage(e, groupIndex, vehicleIndex, v.images.length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/75 rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
                              aria-label="Next image"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-[var(--radius-xl)] items-center justify-center pointer-events-none">
                          <div className="bg-white/90 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                            <span className="text-xs font-semibold text-gray-700">Click to enlarge</span>
                          </div>
                        </div>

                        {v.images.length > 1 && (
                          <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Swipe
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded-t-[var(--radius-xl)] text-sm">
                        No Image Available
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{v.brand}</p>
                      <h3
                        className="text-xl md:text-2xl font-bold text-[var(--color-primary)]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {v.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wide mt-0.5" style={{ color: 'var(--color-accent)' }}>
                        {v.subtitle}
                      </p>
                    </div>

                    <p className="text-body text-sm flex-1 leading-relaxed mb-4">{v.desc}</p>

                    <button
                      onClick={() => toggleDetails(groupIndex, vehicleIndex)}
                      className="w-full mb-4 py-3 px-4 rounded-[var(--radius-lg)] font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 touch-manipulation"
                      style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        minHeight: '48px',
                      }}
                    >
                      {isDetailsExpanded(groupIndex, vehicleIndex) ? 'Hide Details' : 'View Details'}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isDetailsExpanded(groupIndex, vehicleIndex) ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isDetailsExpanded(groupIndex, vehicleIndex) && (
                      <div className="animate-fade-in mb-4 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />, label: 'Capacity', value: v.capacity },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />, label: 'Luggage', value: v.luggage },
                          ].map(({ icon, label, value }) => (
                            <div key={label} className="flex items-start gap-2">
                              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">{icon}</svg>
                              <div>
                                <p className="text-xs font-semibold text-[var(--color-text-muted)] mb-0.5">{label}</p>
                                <p className="text-sm font-medium">{value}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                          <p className="text-xs font-semibold text-[var(--color-text-muted)] mb-3 flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Premium Features
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {v.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1.5">
                                <span style={{ color: 'var(--color-accent)' }} className="mt-0.5 flex-shrink-0">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div
                          className="p-4 rounded-[var(--radius-lg)]"
                          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))' }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs font-bold uppercase tracking-wider text-white">Hourly Rates</p>
                          </div>
                          <p className="text-xs text-gray-300 mb-2">Minimum: {v.rates.minimum}</p>
                          <div className="space-y-1.5">
                            {v.rates.tiers.map((tier, idx) => (
                              <div key={idx} className="flex justify-between items-center text-sm">
                                <span className="text-gray-300">{tier.duration}</span>
                                <span className="font-bold text-white">{tier.rate}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <a href="/services" className="btn-accent touch-manipulation">
            Book Your Vehicle Now
          </a>
        </div>
      </div>

      {lightbox.isOpen && lightbox.groupIndex !== null && lightbox.vehicleIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onTouchStart={onLightboxTouchStart}
          onTouchMove={onLightboxTouchMove}
          onTouchEnd={onLightboxTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
            <img
              src={vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images[lightbox.imageIndex]}
              alt=""
              className="max-h-[85vh] max-w-[95vw] sm:max-h-[90vh] sm:max-w-[90vw] md:max-w-4xl object-contain rounded-lg shadow-2xl select-none"
              draggable="false"
            />

            <button
              onClick={() => setLightbox({ isOpen: false, groupIndex: null, vehicleIndex: null, imageIndex: 0 })}
              className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all touch-manipulation"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length > 1 && (
              <>
                <button
                  onClick={() => setLightbox(prev => {
                    const len = vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length;
                    return { ...prev, imageIndex: (prev.imageIndex - 1 + len) % len };
                  })}
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all touch-manipulation"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setLightbox(prev => {
                    const len = vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length;
                    return { ...prev, imageIndex: (prev.imageIndex + 1) % len };
                  })}
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all touch-manipulation"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-1.5 rounded-full text-white text-sm">
              {lightbox.imageIndex + 1} / {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length}
            </div>

            {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length > 1 && (
              <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Swipe to navigate
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default VehiclesSection;