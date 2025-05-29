import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GMG Transportation Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Luxury transportation services in Los Angeles" />
        <link rel="icon" href="/images/GMG.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

