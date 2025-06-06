import Head from 'next/head';
import React from 'react';

export default function ReviewsPage() {
  return (
    <>
      <Head>
        <title>Reviews | GMG Transportation</title>
        <meta name="description" content="Read real reviews from GMG Transportation clients. See what makes our luxury chauffeur service trusted across Southern California." />
      </Head>

      <section className="bg-white py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6">What Our Clients Say</h3>

        <br />
        
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12">
          With over 15 years of experience, GMG Transportation has earned the trust of hundreds of clients across Southern California.
          Here’s what some of them had to say about their luxury ride experience with us:
        </p>

        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <blockquote className="italic text-gray-700">
              “Outstanding service from start to finish. The driver was punctual, the Escalade was spotless, and our airport transfer was stress-free.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Amanda, Pasadena</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “I booked GMG for a corporate event and they exceeded expectations. Professional, reliable, and the Yukon was very comfortable.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Daniel, Burbank</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “Absolutely the best luxury transportation company we've used. The driver helped with luggage and got us to LAX with time to spare.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Michelle, Santa Monica</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “Great experience from booking to drop-off. Clean car, friendly service, and very fair pricing. Highly recommend GMG.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Jason, Glendale</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “I’ve used GMG several times for airport and business travel. They’re always early, courteous, and the vehicles are immaculate.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Priya, Manhattan Beach</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “My wedding day transportation was perfect. GMG made sure every detail was covered, from music to timing to champagne on board.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Erica, Beverly Hills</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “Professional, polished, and worth every penny. They even helped coordinate our group transport across multiple venues.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Sean, Culver City</p>
          </div>

          <div>
            <blockquote className="italic text-gray-700">
              “This is the only transportation company I trust for important events. The drivers are respectful and always go above and beyond.”
            </blockquote>
            <p className="text-sm font-semibold text-gray-800 mt-2">— Linda, Malibu</p>
          </div>
        </div>
      </section>
    </>
  );
}
