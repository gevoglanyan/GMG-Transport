import Head from 'next/head';
import React from 'react';

const reviews = [
  { text: "Outstanding service from start to finish. The driver was punctual, the Escalade was spotless, and our airport transfer was stress-free.", author: "Amanda", location: "Pasadena" },
  { text: "I booked GMG for a corporate event and they exceeded expectations. Professional, reliable, and the Yukon was very comfortable.", author: "Daniel", location: "Burbank" },
  { text: "Absolutely the best luxury transportation company we've used. The driver helped with luggage and got us to LAX with time to spare.", author: "Michelle", location: "Santa Monica" },
  { text: "Great experience from booking to drop-off. Clean car, friendly service, and very fair pricing. Highly recommend GMG.", author: "Jason", location: "Glendale" },
  { text: "I've used GMG several times for airport and business travel. They're always early, courteous, and the vehicles are immaculate.", author: "Priya", location: "Manhattan Beach" },
  { text: "My wedding day transportation was perfect. GMG made sure every detail was covered, from music to timing to champagne on board.", author: "Erica", location: "Beverly Hills" },
  { text: "Professional, polished, and worth every penny. They even helped coordinate our group transport across multiple venues.", author: "Sean", location: "Culver City" },
  { text: "This is the only transportation company I trust for important events. The drivers are respectful and always go above and beyond.", author: "Linda", location: "Malibu" },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="var(--color-accent)" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Read real reviews from GMG Transportation clients. See what makes our luxury chauffeur service trusted across Southern California." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-wide animate-fade-in">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-3 inline-flex">Client Testimonials</span>
            <h1 className="heading-lg mb-4">What Our Clients Say</h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-body-lg max-w-2xl mx-auto">
              With over 15 years of experience, GMG Transportation, Inc has earned the trust of hundreds of clients
              across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="card hover:scale-[1.02] transition-all duration-300 flex flex-col animate-fade-in"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="icon-badge mb-4" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <svg className="w-5 h-5" fill="var(--color-accent)" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <StarRating />

                <blockquote className="text-body italic flex-1 mb-5 leading-relaxed">
                  "{r.text}"
                </blockquote>

                <div className="border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="font-semibold text-[var(--color-primary)] text-sm">— {r.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{r.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-card mt-14 max-w-2xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Experience the GMG Difference
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Join hundreds of satisfied clients who trust GMG for their luxury travel needs.
            </p>
            <a href="/services#booking" className="btn-accent">
              Book Your Ride Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}