import React, { useState } from 'react';
import Head from 'next/head';

const faqCategories = [
  {
    category: "Booking & Reservations",
    faqs: [
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 24-48 hours in advance to ensure availability. However, we do our best to accommodate last-minute bookings based on vehicle and driver availability."
      },
      {
        question: "What is your minimum booking time?",
        answer: "We require a minimum of 2 hours per booking for all vehicles."
      },
      {
        question: "Can I book for someone else?",
        answer: "Yes! You can book transportation for family members, friends, colleagues, or clients. Just provide their contact information and pickup details during booking."
      },
      {
        question: "How do I modify an existing reservation?",
        answer: "Contact us at least 24 hours before your scheduled pickup at 323-284-8444 or gmgtransinc@gmail.com to modify your reservation. Changes are subject to availability."
      },
    ]
  },
  {
    category: "Payment & Pricing",
    faqs: [
      {
        question: "Do your rates include the driver?",
        answer: "Yes. All bookings include a professional chauffeur as part of the rate."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and offer invoicing for approved corporate accounts."
      },
      {
        question: "Is gratuity included?",
        answer: "Gratuity is not included in the quoted rate and is at your discretion. Standard gratuity for exceptional service is 15-20% of the total fare."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! Our quotes include the vehicle, driver, and standard service. Additional charges may apply for extra stops, extended wait times beyond 15 minutes, or route changes."
      },
      {
        question: "Do you offer corporate rates or volume discounts?",
        answer: "Yes! We offer special rates for corporate accounts and frequent customers. Contact us at 323-284-8444 to discuss corporate packages."
      },
    ]
  },
  {
    category: "Vehicles & Amenities",
    faqs: [
      {
        question: "What types of vehicles do you have?",
        answer: "Our fleet includes Cadillac Escalade ESV, Chevrolet Suburban, and GMC Yukon XL vehicles (both premium and standard), accommodating 6-7 passengers with luggage."
      },
      {
        question: "Can I request a specific vehicle or driver?",
        answer: "Absolutely! While we can't always guarantee the same driver or vehicle, we will do our best to honor your preferences based on availability."
      },
      {
        question: "Are your vehicles equipped with WiFi?",
        answer: "Yes, our premium vehicles (Escalade and Premium Yukon XL) come equipped with WiFi. Please let us know if you need WiFi access when booking."
      },
      {
        question: "Do you provide child car seats?",
        answer: "Yes. Child and booster seats are available upon request at no additional charge. Please mention this during the booking process so we can accommodate your needs."
      },
      {
        question: "Can I bring pets?",
        answer: "Service animals are always welcome. For pets, please contact us in advance to make arrangements. Small pets in carriers are generally acceptable."
      },
    ]
  },
  {
    category: "Airport Services",
    faqs: [
      {
        question: "Do you provide airport pickups?",
        answer: "Absolutely. We track your flight in real-time and ensure prompt curbside pickup or meet-and-greet inside the terminal based on your preference."
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "No worries! We monitor all flights in real-time. If your flight is delayed, we automatically adjust your pickup time at no additional charge."
      },
      {
        question: "Do you offer meet and greet service?",
        answer: "Yes! Our driver can meet you inside the terminal with a name sign. This service is available at LAX and other major airports."
      },
      {
        question: "How much time should I allow for airport dropoff?",
        answer: "We recommend arriving 2 hours before domestic flights and 3 hours before international flights. We monitor traffic and adjust departure times accordingly."
      },
      {
        question: "Which airports do you serve?",
        answer: "We serve all Southern California airports including LAX, Burbank (BUR), Long Beach (LGB), John Wayne (SNA), Ontario (ONT), and San Diego (SAN)."
      },
    ]
  },
  {
    category: "Cancellations & Changes",
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made at least 24 hours before the scheduled pickup time are fully refundable minus processing fees. Cancellations within 24 hours may incur a 50-100% charge depending on vehicle and timing."
      },
      {
        question: "What if I need to cancel due to weather or emergency?",
        answer: "We understand emergencies happen. Contact us immediately and we'll work with you on a case-by-case basis to find a fair solution."
      },
      {
        question: "Can I reschedule my booking?",
        answer: "Yes, you can reschedule with at least 24 hours notice subject to availability. Contact us at 323-284-8444 or gmgtransinc@gmail.com."
      },
    ]
  },
  {
    category: "Service Areas & Travel",
    faqs: [
      {
        question: "Can I book for long distance travel?",
        answer: "Yes. We offer intercity travel throughout Southern California and beyond. Contact us directly for custom quotes for destinations like San Diego, Las Vegas, Palm Springs, or San Francisco."
      },
      {
        question: "What areas do you serve?",
        answer: "We primarily serve Los Angeles County and surrounding areas including Beverly Hills, Santa Monica, Pasadena, Glendale, Burbank, and the San Fernando Valley. Contact us for service to other Southern California locations."
      },
      {
        question: "Do you provide hourly service for multiple stops?",
        answer: "Yes! Our hourly service is perfect for errands, meetings, shopping, or touring. Minimum 2 hours applies."
      },
      {
        question: "Can you take me to Las Vegas?",
        answer: "Absolutely! Las Vegas is a popular destination. The drive takes approximately 4-5 hours. Contact us for special rates on long-distance trips."
      },
    ]
  },
  {
    category: "Safety & Insurance",
    faqs: [
      {
        question: "Are your vehicles insured?",
        answer: "Yes, all of our vehicles are fully licensed and insured for commercial use and passenger safety. Insurance certificates are available upon request."
      },
      {
        question: "Are your drivers background checked?",
        answer: "Yes. All our drivers undergo thorough background checks, drug testing, and have clean driving records. They are professionally trained and licensed commercial drivers."
      },
      {
        question: "What COVID-19 safety measures do you have?",
        answer: "All vehicles are thoroughly sanitized between rides, and we follow CDC guidelines. Masks are available upon request, and our drivers maintain the highest hygiene standards."
      },
      {
        question: "What happens if there's a vehicle issue during my trip?",
        answer: "In the rare event of a mechanical issue, we have backup vehicles and will arrange immediate alternative transportation at no extra cost to you."
      },
    ]
  },
  {
    category: "Special Events",
    faqs: [
      {
        question: "Do you provide wedding transportation?",
        answer: "Yes! We specialize in wedding transportation including bridal party transfers, guest shuttles, and getaway cars. Contact us to discuss custom wedding packages."
      },
      {
        question: "Can you accommodate large groups for events?",
        answer: "Yes. We can coordinate multiple vehicles for conferences, corporate events, weddings, and other group transportation needs."
      },
      {
        question: "Do you decorate vehicles for special occasions?",
        answer: "We can arrange decorations for weddings and special events. Please discuss your requirements when booking."
      },
    ]
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (categoryIdx, faqIdx) => {
    const key = `${categoryIdx}-${faqIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="Find answers to frequently asked questions about booking, pricing, cancellations, airport services, and vehicle policies." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="max-w-6xl mx-auto animate-fade-in px-4">
          <div className="text-center mb-12">
            <h3 className="heading-lg mb-4">Frequently Asked Questions</h3>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg">
              Find answers to common questions about our services, booking process, and policies.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIdx) => (
              <div key={categoryIdx} className="animate-slide-in" style={{ animationDelay: `${categoryIdx * 0.1}s` }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] font-['Playfair_Display'] mb-2">
                    {category.category}
                  </h2>
                  <div className="h-0.5 w-16 bg-[var(--color-accent)] rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIdx) => (
                    <div 
                      key={faqIdx} 
                      className="card cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => toggleFaq(categoryIdx, faqIdx)}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                            {faq.question}
                          </h4>
                          <div 
                            className={`overflow-hidden transition-all duration-300 ${
                              openIndex === `${categoryIdx}-${faqIdx}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-body pt-2">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center transition-transform duration-300 ${
                          openIndex === `${categoryIdx}-${faqIdx}` ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-center mt-16">
            <h4 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Still Have Questions?</h4>
            <p className="text-lg mb-6 text-gray-200">
              Our team is here to help. Reach out anytime for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+14243332293"
                className="btn-accent inline-block hover:scale-105 transition-transform"
              >
                Call: 323-284-8444
              </a>
              <a
                href="/contact"
                className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-[var(--radius-lg)] font-semibold hover:bg-opacity-20 transition-all inline-block"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}