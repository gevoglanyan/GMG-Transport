import React from 'react';
import Head from 'next/head';
import VehiclesSection from '../components/VehiclesSection';

export default function FleetPage() {
  return (
    <>
      <Head>
        <title>Fleet</title>
        <meta name="description" content="Explore our luxury fleet of vehicles, including Escalade, Suburban, and Yukon models. Book your next ride with GMG Transportation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-b from-white to-[var(--color-bg)]">
        <VehiclesSection />
      </div>
    </>
  );
}