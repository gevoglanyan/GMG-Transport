import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/next";
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Analytics />
    </>
  );
}

export default MyApp;