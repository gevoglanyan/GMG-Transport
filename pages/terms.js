import React from 'react';
import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - GMG Transportation</title>
        <meta name="description" content="Terms of service, booking policies, and user agreements for GMG Transportation Inc." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Terms of Service</h1>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg">
              Last Updated: January 2025
            </p>
          </div>

          <div className="card space-y-8 text-left">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                1. Acceptance of Terms
              </h2>
              <p className="text-body mb-4">
                By accessing and using the services provided by GMG Transportation Inc. ("GMG," "we," "us," or "our"), 
                you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
              <p className="text-body">
                These terms apply to all users of our transportation services, including passengers, bookers, 
                and visitors to our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                2. Service Description
              </h2>
              <p className="text-body mb-4">
                GMG Transportation provides luxury ground transportation services in Southern California, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4">
                <li>Airport transfers (pickup and dropoff)</li>
                <li>Corporate and executive travel</li>
                <li>Special event transportation</li>
                <li>Hourly chauffeur services</li>
                <li>Long-distance intercity travel</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                3. Booking and Reservations
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.1 Booking Process</h3>
              <p className="text-body mb-4">
                Reservations can be made through our website, by phone at 323-284-8444, or via email at 
                gmgtransinc@gmail.com. All bookings are subject to vehicle and driver availability.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.2 Minimum Booking</h3>
              <p className="text-body mb-4">
                All services require a minimum booking of 2 hours. Bookings under 2 hours will be charged 
                at the 2-hour minimum rate.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.3 Advance Notice</h3>
              <p className="text-body mb-4">
                We recommend booking at least 24-48 hours in advance to ensure availability. 
                While we accommodate last-minute bookings when possible, availability is not guaranteed.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.4 Confirmation</h3>
              <p className="text-body">
                All bookings will receive a confirmation via email or phone. Please verify all details 
                are correct in your confirmation. It is your responsibility to notify us of any errors 
                or changes needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                4. Payment Terms
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.1 Payment Methods</h3>
              <p className="text-body mb-4">
                We accept payment via credit card (Visa, Mastercard, American Express), debit card, 
                and for approved corporate accounts, invoicing.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.2 Payment Timing</h3>
              <p className="text-body mb-4">
                Payment is required at the time of booking through our secure Stripe payment system. 
                For corporate accounts with invoicing, payment is due within 30 days of invoice date.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.3 Pricing</h3>
              <p className="text-body mb-4">
                All rates are quoted in U.S. dollars and are subject to change. Rates are calculated based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Hourly rate for the selected vehicle</li>
                <li>Number of hours (minimum 2 hours)</li>
                <li>Additional stops or route changes</li>
                <li>Wait time beyond agreed grace period</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.4 Gratuity</h3>
              <p className="text-body">
                Gratuity is not included in the quoted rate and is at the customer's discretion. 
                Standard gratuity for exceptional service is 15-20% of the total fare.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                5. Cancellation and Refund Policy
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">5.1 Customer Cancellations</h3>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li><strong>24+ hours notice:</strong> Full refund minus processing fees</li>
                <li><strong>12-24 hours notice:</strong> 50% refund</li>
                <li><strong>Less than 12 hours:</strong> No refund</li>
                <li><strong>No-show:</strong> 100% charge</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">5.2 GMG Cancellations</h3>
              <p className="text-body mb-4">
                In the unlikely event that GMG must cancel your reservation, you will receive a full refund. 
                We will make every effort to provide alternative transportation options.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">5.3 Flight Delays</h3>
              <p className="text-body">
                For airport pickups, we monitor flight arrivals in real-time. There is no charge for 
                delays due to flight arrival changes. However, if you fail to notify us of changes to 
                your flight information and miss your scheduled pickup, standard cancellation fees apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                6. Customer Responsibilities
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.1 Accurate Information</h3>
              <p className="text-body mb-4">
                You must provide accurate pickup/dropoff locations, contact information, flight details 
                (if applicable), and number of passengers. Inaccurate information may result in delays 
                or additional charges.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.2 Punctuality</h3>
              <p className="text-body mb-4">
                Please be ready at your pickup location at the scheduled time. A grace period of 15 minutes 
                is provided. After 15 minutes, wait time charges of $25 per 15 minutes may apply.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.3 Passenger Conduct</h3>
              <p className="text-body mb-4">
                Passengers must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Treat the driver and vehicle with respect</li>
                <li>Not smoke in the vehicle</li>
                <li>Not consume alcohol unless approved in advance</li>
                <li>Comply with all applicable laws</li>
                <li>Ensure children are properly secured in car seats (provided upon request)</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.4 Property Damage</h3>
              <p className="text-body">
                Customers are responsible for any damage to the vehicle caused by passengers, including 
                but not limited to stains, tears, burns, or mechanical damage. Cleaning fees starting 
                at $150 may apply for excessive mess or damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                7. Liability and Insurance
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">7.1 Insurance Coverage</h3>
              <p className="text-body mb-4">
                All GMG vehicles are fully insured for commercial passenger transportation as required 
                by California law. Insurance certificates available upon request.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">7.2 Limitation of Liability</h3>
              <p className="text-body mb-4">
                GMG Transportation's liability is limited to direct damages only. We are not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Missed flights, meetings, or events due to traffic or unforeseen circumstances</li>
                <li>Lost, stolen, or damaged personal belongings left in the vehicle</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">7.3 Lost Items</h3>
              <p className="text-body">
                While we make every effort to return lost items, GMG is not responsible for personal 
                belongings left in vehicles. Please check for all belongings before exiting the vehicle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                8. Service Modifications
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">8.1 Route Changes</h3>
              <p className="text-body mb-4">
                Route changes or additional stops requested during service may result in additional charges 
                based on time and distance.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">8.2 Time Extensions</h3>
              <p className="text-body">
                For hourly bookings, extensions beyond the reserved time are subject to availability and 
                will be charged at the hourly rate for the vehicle.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                9. Force Majeure
              </h2>
              <p className="text-body">
                GMG Transportation is not liable for failure to perform services due to circumstances 
                beyond our control, including but not limited to: natural disasters, severe weather, 
                acts of God, civil unrest, government restrictions, or vehicle mechanical failures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                10. Dispute Resolution
              </h2>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">10.1 Complaints</h3>
              <p className="text-body mb-4">
                Any complaints or concerns should be directed to us within 48 hours of service completion 
                by contacting us at gmgtransinc@gmail.com or 323-284-8444.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">10.2 Governing Law</h3>
              <p className="text-body">
                These Terms of Service are governed by the laws of the State of California. Any disputes 
                shall be resolved in the courts of Los Angeles County, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                11. Changes to Terms
              </h2>
              <p className="text-body">
                GMG Transportation reserves the right to modify these Terms of Service at any time. 
                Changes will be effective immediately upon posting to our website. Continued use of 
                our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                12. Contact Information
              </h2>
              <p className="text-body mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-lg">
                <p className="text-body mb-2"><strong>GMG Transportation Inc.</strong></p>
                <p className="text-body mb-2">Email: gmgtransinc@gmail.com</p>
                <p className="text-body mb-2">Phone: 323-284-8444</p>
                <p className="text-body">Location: Los Angeles, California</p>
              </div>
            </div>

            <div className="bg-[var(--color-accent)] bg-opacity-10 p-6 rounded-lg border-l-4 border-[var(--color-accent)]">
              <p className="text-body font-semibold">
                By using GMG Transportation services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary inline-block hover:scale-105 transition-transform">
              Questions? Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}