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
      },
      {
        id: "yukon-premium",
        brand: "GMC",
        title: "Yukon XL",
        subtitle: "Premium Edition",
        images: ["/images/IMG_3984.png", "/images/IMG_3985.png", "/images/IMG_3986.png", "/images/IMG_3987.png", "/images/IMG_3988.png", "/images/IMG_3989.png", "/images/IMG_3990.png"],
        alt: "GMC Yukon XL Premium",
        desc: "Experience elevated luxury in the Premium Yukon XL. Plush captain's chairs cradle passengers in comfort while the expansive panoramic sunroof floods the cabin with natural light. Every surface reflects meticulous attention to detail—from ambient lighting that sets the perfect mood to advanced climate control that keeps everyone comfortable. Ideal for executive travel and intimate VIP groups.",
        capacity: "6 Passengers",
        luggage: "5 – 6 Large Suitcases",
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
        brand: "GMC",
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
      },
      {
        id: "yukon-standard",
        brand: "GMC",
        title: "Yukon XL",
        subtitle: "Classic Comfort",
        images: ["/images/IMG_5604.jpg", "/images/IMG_5605.jpg", "/images/IMG_5606.jpg", "/images/IMG_5607.jpg", "/images/IMG_5608.jpg", "/images/IMG_5609.jpg", "/images/IMG_5610.jpg"],
        alt: "GMC Yukon XL",
        desc: "The quintessential full-size SUV that does it all. With three rows of genuine comfort and commanding road presence, this Yukon XL is built for the journey. Whether you're shuttling a business team across town or embarking on a long-distance adventure, you'll appreciate the thoughtful layout, smooth ride quality, and versatile seating that adapts to your personal needs.",
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
    setExpandedDetails(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetailsExpanded = (groupIndex, vehicleIndex) => {
    const key = `${groupIndex}-${vehicleIndex}`;
    return expandedDetails[key] || false;
  };

  const getCurrentImageIndex = (groupIndex, vehicleIndex) => {
    const key = `${groupIndex}-${vehicleIndex}`;
    return currentImageIndex[key] || 0;
  };

  const setImageIndex = (groupIndex, vehicleIndex, index) => {
    const key = `${groupIndex}-${vehicleIndex}`;
    setCurrentImageIndex(prev => ({
      ...prev,
      [key]: index
    }));
  };

  const handlePrevImage = (e, groupIndex, vehicleIndex, imagesLength) => {
    e.stopPropagation();
    const currentIndex = getCurrentImageIndex(groupIndex, vehicleIndex);
    const newIndex = (currentIndex - 1 + imagesLength) % imagesLength;
    setImageIndex(groupIndex, vehicleIndex, newIndex);
  };

  const handleNextImage = (e, groupIndex, vehicleIndex, imagesLength) => {
    e.stopPropagation();
    const currentIndex = getCurrentImageIndex(groupIndex, vehicleIndex);
    const newIndex = (currentIndex + 1) % imagesLength;
    setImageIndex(groupIndex, vehicleIndex, newIndex);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (groupIndex, vehicleIndex, imagesLength) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      const currentIndex = getCurrentImageIndex(groupIndex, vehicleIndex);
      const newIndex = (currentIndex + 1) % imagesLength;
      setImageIndex(groupIndex, vehicleIndex, newIndex);
    }
    
    if (isRightSwipe) {
      const currentIndex = getCurrentImageIndex(groupIndex, vehicleIndex);
      const newIndex = (currentIndex - 1 + imagesLength) % imagesLength;
      setImageIndex(groupIndex, vehicleIndex, newIndex);
    }
  };

  const onLightboxTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onLightboxTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onLightboxTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setLightbox(prev => ({
        ...prev,
        imageIndex:
          (prev.imageIndex + 1) % vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length,
      }));
    }
    
    if (isRightSwipe) {
      setLightbox(prev => ({
        ...prev,
        imageIndex:
          (prev.imageIndex - 1 + vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length) %
          vehicleGroups[prev.groupIndex].vehicles[prev.vehicleIndex].images.length,
      }));
    }
  };

  useEffect(() => {
    document.body.style.overflow = lightbox.isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.isOpen]);

  useEffect(() => {
    const preventDefault = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchstart', preventDefault, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', preventDefault);
    };
  }, []);

  return (
    <section id="vehicles" className="section-padding bg-gradient-to-b from-white to-[var(--color-bg)]">
      <div className="container-wide text-center animate-fade-in">
        <div className="mb-12 md:mb-16 px-4">
          <h3 className="heading-lg mb-4 text-3xl md:text-4xl lg:text-5xl">Our Premium Fleet</h3>
          <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-4"></div>
          <p className="text-body max-w-2xl mx-auto text-sm md:text-base">
            Choose from our meticulously maintained luxury vehicles, each offering comfort, style, and reliability.
          </p>
        </div>

        {vehicleGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16 md:mb-20">
            <div className="mb-6 md:mb-8 px-4">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-2 font-['Playfair_Display']">
                {group.category}
              </h4>
              <div className="h-0.5 w-16 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto px-4">
              {group.vehicles.map((v, vehicleIndex) => (
                <div 
                  key={vehicleIndex} 
                  className="card flex flex-col hover:scale-[1.02] transition-all duration-300 animate-slide-in w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.5rem)] self-start"
                  style={{ animationDelay: `${vehicleIndex * 0.1}s` }}
                >
                  <div className="relative mb-4 -mx-6 -mt-6">
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
                          className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-xl cursor-pointer transition-transform duration-300 select-none"
                          draggable="false"
                        />

                        {v.images.length > 1 && (
                          <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-black bg-opacity-70 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold flex items-center gap-1">
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
                              className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-50 hover:bg-opacity-75 active:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
                              aria-label="Previous image"
                            >
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => handleNextImage(e, groupIndex, vehicleIndex, v.images.length)}
                              className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-50 hover:bg-opacity-75 active:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
                              aria-label="Next image"
                            >
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-xl items-center justify-center pointer-events-none">
                          <div className="bg-white bg-opacity-90 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                            <span className="text-xs font-semibold text-gray-700">Click to enlarge</span>
                          </div>
                        </div>

                        {v.images.length > 1 && (
                          <div className="md:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-[10px] flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Swipe
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-48 sm:h-56 md:h-60 flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text-muted)] rounded-t-xl text-sm">
                        No Image Available
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 text-left">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">{v.brand}</p>
                      <h5 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] font-['Playfair_Display']">{v.title}</h5>
                      <p className="text-xs md:text-sm text-[var(--color-accent)] font-semibold tracking-wide uppercase">{v.subtitle}</p>
                    </div>
                    
                    <p className="text-body text-sm mb-4 flex-1 leading-relaxed">{v.desc}</p>

                    <button
                      onClick={() => toggleDetails(groupIndex, vehicleIndex)}
                      className="w-full mb-4 py-3 px-4 bg-[var(--color-primary)] hover:opacity-90 active:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg touch-manipulation"
                    >
                      <span>{isDetailsExpanded(groupIndex, vehicleIndex) ? 'Hide Details' : 'View Details'}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${isDetailsExpanded(groupIndex, vehicleIndex) ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isDetailsExpanded(groupIndex, vehicleIndex) && (
                      <div className="animate-fade-in mb-4">
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
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {v.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-[var(--color-text-muted)] flex items-start gap-1.5">
                                <span className="text-[var(--color-accent)] mt-0.5">•</span>
                                <span className="leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white p-4 rounded-lg">
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
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center px-4">
          <a href="/services#booking" className="btn-accent inline-block hover:scale-105 active:scale-95 transition-transform touch-manipulation px-6 py-3 text-sm md:text-base">
            Book Your Vehicle Now
          </a>
        </div>

        {lightbox.isOpen && lightbox.groupIndex !== null && lightbox.vehicleIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center animate-fade-in"
            onTouchStart={onLightboxTouchStart}
            onTouchMove={onLightboxTouchMove}
            onTouchEnd={onLightboxTouchEnd}
          >
            <div className="relative w-full h-full flex items-center justify-center px-2 sm:px-4 md:px-8">
              <img
                src={vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images[lightbox.imageIndex]}
                alt=""
                className="max-h-[85vh] max-w-[95vw] sm:max-h-[90vh] sm:max-w-[90vw] md:max-h-[80vh] md:max-w-4xl object-contain rounded-lg shadow-2xl select-none"
                draggable="false"
              />
              
              <button
                onClick={() => setLightbox({ isOpen: false, groupIndex: null, vehicleIndex: null, imageIndex: 0 })}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10 touch-manipulation"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10 touch-manipulation"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all z-10 touch-manipulation"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm">
                {lightbox.imageIndex + 1} / {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length}
              </div>

              {vehicleGroups[lightbox.groupIndex].vehicles[lightbox.vehicleIndex].images.length > 1 && (
                <div className="md:hidden absolute top-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Swipe to navigate
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VehiclesSection;