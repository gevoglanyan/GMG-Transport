import React, { useState } from 'react';
import Head from 'next/head';

const faqCategories = [
  {
    category: "Booking & Reservations",
    icon: "📋",
    faqs: [
      { question: "How far in advance should I book?", answer: "We recommend booking at least 24-48 hours in advance to ensure availability. However, we do our best to accommodate last-minute bookings based on vehicle and driver availability." },
      { question: "What is your minimum booking time?", answer: "We require a minimum of 2 hours per booking for all vehicles." },
      { question: "Can I book for someone else?", answer: "Yes! You can book transportation for family members, friends, colleagues, or clients. Just provide their contact information and pickup details during booking." },
      { question: "How do I modify an existing reservation?", answer: "Contact us at least 24 hours before your scheduled pickup at 323-284-8444 or gmgtransinc@gmail.com to modify your reservation. Changes are subject to availability." },
    ],
  },
  {
    category: "Payment & Pricing",
    icon: "💳",
    faqs: [
      { question: "Do your rates include the driver?", answer: "Yes. All bookings include a professional chauffeur as part of the rate." },
      { question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and offer invoicing for approved corporate accounts." },
      { question: "Is gratuity included?", answer: "Gratuity is not included in the quoted rate and is at your discretion. Standard gratuity for exceptional service is 15-20% of the total fare." },
      { question: "Are there any hidden fees?", answer: "No hidden fees! Our quotes include the vehicle, driver, and standard service. Additional charges may apply for extra stops, extended wait times beyond 15 minutes, or route changes." },
      { question: "Do you offer corporate rates or volume discounts?", answer: "Yes! We offer special rates for corporate accounts and frequent customers. Contact us at 323-284-8444 to discuss corporate packages." },
    ],
  },
  {
    category: "Vehicles & Amenities",
    icon: "🚐",
    faqs: [
      { question: "What types of vehicles do you have?", answer: "Our fleet includes Cadillac Escalade ESV, Chevrolet Suburban, and GMC Yukon XL vehicles (both premium and standard), accommodating 6-7 passengers with luggage." },
      { question: "Can I request a specific vehicle or driver?", answer: "Absolutely! While we can't always guarantee the same driver or vehicle, we will do our best to honor your preferences based on availability." },
      { question: "Are your vehicles equipped with WiFi?", answer: "Yes, our premium vehicles (Escalade and Premium Yukon XL) come equipped with WiFi. Please let us know if you need WiFi access when booking." },
      { question: "Do you provide child car seats?", answer: "Yes. Child and booster seats are available upon request at no additional charge. Please mention this during the booking process so we can accommodate your needs." },
      { question: "Can I bring pets?", answer: "Service animals are always welcome. For pets, please contact us in advance to make arrangements. Small pets in carriers are generally acceptable." },
    ],
  },
  {
    category: "Airport Services",
    icon: "✈️",
    faqs: [
      { question: "Do you provide airport pickups?", answer: "Absolutely. We track your flight in real-time and ensure prompt curbside pickup or meet-and-greet inside the terminal based on your preference." },
      { question: "What happens if my flight is delayed?", answer: "No worries! We monitor all flights in real-time. If your flight is delayed, we automatically adjust your pickup time at no additional charge." },
      { question: "Do you offer meet and greet service?", answer: "Yes! Our driver can meet you inside the terminal with a name sign. This service is available at LAX and other major airports." },
      { question: "How much time should I allow for airport dropoff?", answer: "We recommend arriving 2 hours before domestic flights and 3 hours before international flights. We monitor traffic and adjust departure times accordingly." },
      { question: "Which airports do you serve?", answer: "We serve all Southern California airports including LAX, Burbank (BUR), Long Beach (LGB), John Wayne (SNA), Ontario (ONT), and San Diego (SAN)." },
    ],
  },
  {
    category: "Cancellations & Changes",
    icon: "🔄",
    faqs: [
      { question: "What is your cancellation policy?", answer: "Cancellations made at least 24 hours before the scheduled pickup time are fully refundable minus processing fees. Cancellations within 24 hours may incur a 50-100% charge depending on vehicle and timing." },
      { question: "What if I need to cancel due to weather or emergency?", answer: "We understand emergencies happen. Contact us immediately and we'll work with you on a case-by-case basis to find a fair solution." },
      { question: "Can I reschedule my booking?", answer: "Yes, you can reschedule with at least 24 hours notice subject to availability. Contact us at 323-284-8444 or gmgtransinc@gmail.com." },
    ],
  },
  {
    category: "Service Areas & Travel",
    icon: "🗺️",
    faqs: [
      { question: "Can I book for long distance travel?", answer: "Yes. We offer intercity travel throughout Southern California and beyond. Contact us directly for custom quotes for destinations like San Diego, Las Vegas, Palm Springs, or San Francisco." },
      { question: "What areas do you serve?", answer: "We primarily serve Los Angeles County and surrounding areas including Beverly Hills, Santa Monica, Pasadena, Glendale, Burbank, and the San Fernando Valley." },
      { question: "Do you provide hourly service for multiple stops?", answer: "Yes! Our hourly service is perfect for errands, meetings, shopping, or touring. Minimum 2 hours applies." },
      { question: "Can you take me to Las Vegas?", answer: "Absolutely! Las Vegas is a popular destination. The drive takes approximately 4-5 hours. Contact us for special rates on long-distance trips." },
    ],
  },
  {
    category: "Safety & Insurance",
    icon: "🛡️",
    faqs: [
      { question: "Are your vehicles insured?", answer: "Yes, all of our vehicles are fully licensed and insured for commercial use and passenger safety. Insurance certificates are available upon request." },
      { question: "Are your drivers background checked?", answer: "Yes. All our drivers undergo thorough background checks, drug testing, and have clean driving records. They are professionally trained and licensed commercial drivers." },
      { question: "What COVID-19 safety measures do you have?", answer: "All vehicles are thoroughly sanitized between rides, and we follow CDC guidelines. Masks are available upon request, and our drivers maintain the highest hygiene standards." },
      { question: "What happens if there's a vehicle issue during my trip?", answer: "In the rare event of a mechanical issue, we have backup vehicles and will arrange immediate alternative transportation at no extra cost to you." },
    ],
  },
  {
    category: "Special Events",
    icon: "🎉",
    faqs: [
      { question: "Do you provide wedding transportation?", answer: "Yes! We specialize in wedding transportation including bridal party transfers, guest shuttles, and getaway cars. Contact us to discuss custom wedding packages." },
      { question: "Can you accommodate large groups for events?", answer: "Yes. We can coordinate multiple vehicles for conferences, corporate events, weddings, and other group transportation needs." },
      { question: "Do you decorate vehicles for special occasions?", answer: "We can arrange decorations for weddings and special events. Please discuss your requirements when booking." },
    ],
  },
];

export default function FaqPage() {
  const [openKey, setOpenKey] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggle = (catIdx, faqIdx) => {
    const key = `${catIdx}-${faqIdx}`;
    setOpenKey(openKey === key ? null : key);
  };

  const visibleCategories = activeCategory !== null
    ? faqCategories.filter((_, i) => i === activeCategory)
    : faqCategories;

  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="Find answers to frequently asked questions about booking, pricing, cancellations, airport services, and vehicle policies." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="max-w-4xl mx-auto animate-fade-in px-0">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-3 inline-flex">Help Center</span>
            <h1 className="heading-lg mb-4">Frequently Asked Questions</h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-body-lg">
              Find answers to common questions about our services, booking process, and policies.
            </p>
          </div>

          <div
            className="flex gap-2 mb-10 pb-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            <button
              onClick={() => setActiveCategory(null)}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                minHeight: '40px',
                background: activeCategory === null ? 'var(--color-primary)' : 'white',
                color: activeCategory === null ? 'white' : 'var(--color-text-secondary)',
                border: `1.5px solid ${activeCategory === null ? 'var(--color-primary)' : 'var(--color-border)'}`,
              }}
            >
              All Topics
            </button>
            {faqCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(activeCategory === i ? null : i)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={{
                  minHeight: '40px',
                  background: activeCategory === i ? 'var(--color-primary)' : 'white',
                  color: activeCategory === i ? 'white' : 'var(--color-text-secondary)',
                  border: `1.5px solid ${activeCategory === i ? 'var(--color-primary)' : 'var(--color-border)'}`,
                }}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {visibleCategories.map((category, catDisplayIdx) => {
              const catIdx = faqCategories.indexOf(category);
              return (
                <div key={catIdx} className="animate-fade-in">
                  <div className="mb-5">
                    <h2
                      className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {category.icon} {category.category}
                    </h2>
                    <div className="gold-divider" />
                  </div>

                  <div className="space-y-3">
                    {category.faqs.map((faq, faqIdx) => {
                      const isOpen = openKey === `${catIdx}-${faqIdx}`;
                      return (
                        <div
                          key={faqIdx}
                          className="card cursor-pointer select-none transition-all duration-300"
                          style={{
                            borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
                            boxShadow: isOpen ? '0 0 0 1px var(--color-accent)' : undefined,
                          }}
                          onClick={() => toggle(catIdx, faqIdx)}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <h4
                              className="text-base sm:text-lg font-semibold flex-1"
                              style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-primary)' }}
                            >
                              {faq.question}
                            </h4>
                            <div
                              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                              style={{
                                background: isOpen ? 'var(--color-accent)' : 'rgb(212 175 55 / 0.1)',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke={isOpen ? 'var(--color-primary)' : 'var(--color-accent)'}
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>

                          <div
                            style={{
                              overflow: 'hidden',
                              maxHeight: isOpen ? '400px' : '0',
                              opacity: isOpen ? 1 : 0,
                              transition: 'max-height 0.35s ease, opacity 0.25s ease',
                            }}
                          >
                            <p className="text-body pt-3 border-t mt-3" style={{ borderColor: 'var(--color-border)' }}>
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cta-card mt-14">
            <h4
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Still Have Questions?
            </h4>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Our team is here to help. Reach out anytime for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13232848444" className="btn-accent">
                Call: (323) 284-8444
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-lg)] font-semibold text-sm text-white transition-all duration-200 min-h-[48px]"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.2)' }}
              >
                Send a Message
              </a>
            </div>
            <br /><br />
          </div>
        </div>
      </section>
    </>
  );
}