import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - GMG Transportation</title>
        <meta name="description" content="Privacy policy and data protection information for GMG Transportation Inc." />
      </Head>

      <section className="bg-gradient-to-b from-white to-[var(--color-bg)] section-padding">
        <div className="container-narrow animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Privacy Policy</h1>
            <div className="h-1 w-24 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
            <p className="text-body-lg">
              Last Updated: January 2025
            </p>
          </div>

          <div className="card space-y-8 text-left">
            <div>
              <p className="text-body mb-4">
                At GMG Transportation Inc. ("GMG," "we," "us," or "our"), we respect your privacy and are 
                committed to protecting your personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our website and transportation services.
              </p>
              <p className="text-body">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                1. Information We Collect
              </h2>
              
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">1.1 Personal Information</h3>
              <p className="text-body mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Make a booking or reservation</li>
                <li>Create an account on our website</li>
                <li>Contact us via email, phone, or contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Provide feedback or reviews</li>
              </ul>

              <p className="text-body mb-4">
                This personal information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Pickup and dropoff addresses</li>
                <li>Flight information (for airport services)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Special requests or preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">1.2 Automatically Collected Information</h3>
              <p className="text-body mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visit</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">1.3 Location Information</h3>
              <p className="text-body">
                When you use our booking system, we collect location information (pickup and dropoff addresses) 
                to provide our transportation services. We may also collect real-time location data during service 
                if you consent to location tracking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                2. How We Use Your Information
              </h2>
              <p className="text-body mb-4">
                We use the information we collect for the following purposes:
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">2.1 Service Delivery</h3>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Process and fulfill your transportation bookings</li>
                <li>Communicate with you about your reservations</li>
                <li>Coordinate pickup and dropoff logistics</li>
                <li>Provide customer support</li>
                <li>Send booking confirmations and receipts</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">2.2 Business Operations</h3>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Process payments securely</li>
                <li>Maintain records for accounting and legal purposes</li>
                <li>Improve our services and customer experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">2.3 Marketing (with consent)</h3>
              <ul className="list-disc list-inside space-y-2 text-body ml-4">
                <li>Send promotional offers and updates</li>
                <li>Provide information about new services</li>
                <li>Send newsletters (you may unsubscribe at any time)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                3. How We Share Your Information
              </h2>
              <p className="text-body mb-4">
                We do not sell your personal information. We may share your information in the following situations:
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.1 Service Providers</h3>
              <p className="text-body mb-4">
                We share information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li><strong>Stripe:</strong> Payment processing (PCI-DSS compliant)</li>
                <li><strong>Google Maps:</strong> Route planning and address verification</li>
                <li><strong>Vercel:</strong> Website hosting and analytics</li>
                <li><strong>Formspree:</strong> Contact form management</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.2 Legal Requirements</h3>
              <p className="text-body mb-4">
                We may disclose your information if required to do so by law or in response to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Valid legal requests from law enforcement</li>
                <li>Court orders or subpoenas</li>
                <li>Protection of our legal rights</li>
                <li>Prevention of fraud or illegal activity</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">3.3 Business Transfers</h3>
              <p className="text-body">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                to the acquiring entity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                4. Cookies and Tracking Technologies
              </h2>
              
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.1 What Are Cookies</h3>
              <p className="text-body mb-4">
                Cookies are small text files placed on your device to collect standard internet log information 
                and visitor behavior information.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.2 How We Use Cookies</h3>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Track visits across websites for advertising (with consent)</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">4.3 Managing Cookies</h3>
              <p className="text-body">
                You can control and/or delete cookies through your browser settings. However, disabling cookies 
                may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                5. Data Security
              </h2>
              <p className="text-body mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure payment processing through Stripe</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee confidentiality agreements</li>
              </ul>
              <p className="text-body">
                However, no method of transmission over the internet is 100% secure. While we strive to protect 
                your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                6. Your Privacy Rights
              </h2>
              <p className="text-body mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.1 Access and Portability</h3>
              <p className="text-body mb-4">
                You have the right to request a copy of the personal information we hold about you.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.2 Correction</h3>
              <p className="text-body mb-4">
                You can request that we correct any inaccurate or incomplete personal information.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.3 Deletion</h3>
              <p className="text-body mb-4">
                You can request that we delete your personal information, subject to legal and contractual obligations.
              </p>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.4 Opt-Out</h3>
              <p className="text-body mb-4">
                You can opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>Clicking "unsubscribe" in any marketing email</li>
                <li>Contacting us directly at gmgtransinc@gmail.com</li>
                <li>Calling us at 323-284-8444</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 mt-4">6.5 California Privacy Rights (CCPA)</h3>
              <p className="text-body mb-4">
                If you are a California resident, you have additional rights under the California Consumer 
                Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of sale of personal information (we do not sell information)</li>
                <li>Right to deletion</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                7. Data Retention
              </h2>
              <p className="text-body">
                We retain your personal information for as long as necessary to provide our services and comply 
                with legal obligations. Typically, we retain:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mt-4">
                <li><strong>Booking Information:</strong> 7 years for tax and accounting purposes</li>
                <li><strong>Account Information:</strong> Until account deletion is requested</li>
                <li><strong>Marketing Data:</strong> Until you opt-out or request deletion</li>
                <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                8. Children's Privacy
              </h2>
              <p className="text-body">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you become aware that a child has provided us with personal 
                information, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                9. Third-Party Links
              </h2>
              <p className="text-body">
                Our website may contain links to third-party websites (e.g., social media platforms). We are not 
                responsible for the privacy practices of these external sites. We encourage you to review their 
                privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                10. International Data Transfers
              </h2>
              <p className="text-body">
                Your information may be transferred to and processed in countries other than your country of 
                residence. We ensure appropriate safeguards are in place to protect your information in accordance 
                with this privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-body">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new privacy policy on this page and updating the "Last Updated" date. We encourage you to 
                review this privacy policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-['Playfair_Display']">
                12. Contact Us
              </h2>
              <p className="text-body mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-lg">
                <p className="text-body mb-2"><strong>GMG Transportation Inc.</strong></p>
                <p className="text-body mb-2"><strong>Privacy Officer</strong></p>
                <p className="text-body mb-2">Email: gmgtransinc@gmail.com</p>
                <p className="text-body mb-2">Phone: 323-284-8444</p>
                <p className="text-body">Location: Los Angeles, California</p>
              </div>
            </div>

            <div className="bg-[var(--color-accent)] bg-opacity-10 p-6 rounded-lg border-l-4 border-[var(--color-accent)]">
              <p className="text-body font-semibold">
                By using our website and services, you consent to the collection and use of your information 
                as described in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary inline-block hover:scale-105 transition-transform">
              Privacy Questions? Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}