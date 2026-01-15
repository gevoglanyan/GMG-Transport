import Head from 'next/head';
import Homepage from '../components/Homepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>GMG Transportation Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Luxury transportation services in Los Angeles. Professional black car and SUV service for airport transfers, corporate travel, and special events." />
        <link rel="icon" href="/images/GMG.png" type="image/png" />
      </Head>

      <Homepage />
    </>
  );
}