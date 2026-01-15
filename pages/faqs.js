import React, { useState } from 'react';
import Head from 'next/head';

const faqs = [
  {
    question: "What is your minimum booking time?",
    answer: "We require a minimum of 2 hours per booking for all vehicles."
  },
  {
    question: "Do your rates include the driver?",
    answer: "Yes. All bookings include a professional chauffeur as part of the rate."
  },
  {
    question: "Do you provide airport pickups?",
    answer: "Absolutely. We track your flight in real-time and ensure prompt curbside pickup or meet-and-greet inside the terminal based on your preference."
  },
  {
    question: "Can I book for long distance travel?",
    answer: "Yes. We offer intercity travel throughout Southern California and beyond. Contact us directly for custom quotes for destinations like San Diego, Las Vegas, or Palm Springs."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made at least 24 hours before the scheduled pickup time are fully refundable. Cancellations within 24 hours may incur a 50–100% charge depending on vehicle and timing."
  },
  {
    question: "Do you allow last-minute bookings?",
    answer: "We do our best to accommodate last-minute bookings based on vehicle and driver availability. However, we recommend booking at least 24–48 hours in advance for guaranteed service."
  },
  {
    question: "Are your vehicles insured?",
    answer: "Yes, all of our vehicles are fully licensed and insured for commercial use and passenger safety."
  },
  {
    question: "Can I request a specific vehicle or driver?",
    answer: "Absolutely! While we can't always guarantee the same driver or vehicle, we will do our best to honor your preferences based on availability."
  },
  {
    question: "Do you provide child car seats?",
    answer: "Yes. Child and booster seats are available upon request. Please mention this during the booking process so we can accommodate your needs."
  },
  {
    question: "How do I contact you if my plans change?",
    answer: "You can call us anytime at 424-333-2293 or use the contact form on our website. For urgent updates (e.g., flight delays), please call directly to ensure prompt adjustments."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="Find answers to frequently asked questions about booking, pricing, cancellations, and vehicle policies." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="heading-lg mb-4">Frequently Asked Questions</h3>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg">
              Find answers to common questions about our services, booking process, and policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2 font-['Playfair_Display']">
                      {faq.question}
                    </h4>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-body pt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
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