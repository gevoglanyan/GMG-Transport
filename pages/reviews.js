import Head from 'next/head';
import React from 'react';

const reviews = [
  {
    text: "Outstanding service from start to finish. The driver was punctual, the Escalade was spotless, and our airport transfer was stress-free.",
    author: "Amanda",
    location: "Pasadena"
  },
  {
    text: "I booked GMG for a corporate event and they exceeded expectations. Professional, reliable, and the Yukon was very comfortable.",
    author: "Daniel",
    location: "Burbank"
  },
  {
    text: "Absolutely the best luxury transportation company we've used. The driver helped with luggage and got us to LAX with time to spare.",
    author: "Michelle",
    location: "Santa Monica"
  },
  {
    text: "Great experience from booking to drop-off. Clean car, friendly service, and very fair pricing. Highly recommend GMG.",
    author: "Jason",
    location: "Glendale"
  },
  {
    text: "I've used GMG several times for airport and business travel. They're always early, courteous, and the vehicles are immaculate.",
    author: "Priya",
    location: "Manhattan Beach"
  },
  {
    text: "My wedding day transportation was perfect. GMG made sure every detail was covered, from music to timing to champagne on board.",
    author: "Erica",
    location: "Beverly Hills"
  },
  {
    text: "Professional, polished, and worth every penny. They even helped coordinate our group transport across multiple venues.",
    author: "Sean",
    location: "Culver City"
  },
  {
    text: "This is the only transportation company I trust for important events. The drivers are respectful and always go above and beyond.",
    author: "Linda",
    location: "Malibu"
  }
];

export default function ReviewsPage() {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Read real reviews from GMG Transportation clients. See what makes our luxury chauffeur service trusted across Southern California." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-wide animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="heading-lg mb-4">What Our Clients Say</h3>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg max-w-3xl mx-auto">
              With over 15 years of experience, GMG Transportation has earned the trust of hundreds of clients across Southern California.
              Here's what some of them had to say about their luxury ride experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="card hover:scale-[1.02] transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[var(--color-accent)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-body italic mb-6">
                  "{review.text}"
                </blockquote>

                <div className="border-t border-[var(--color-border)] pt-4">
                  <p className="font-semibold text-[var(--color-primary)]">— {review.author}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-center mt-16 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Experience the GMG Difference</h4>
            <p className="text-lg mb-6 text-gray-200">
              Join hundreds of satisfied clients who trust GMG Transportation for their luxury travel needs.
            </p>
            <a
              href="/services#booking"
              className="btn-accent inline-block hover:scale-105 transition-transform"
            >
              Book Your Ride Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}