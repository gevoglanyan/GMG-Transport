import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/next";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Analytics />
    </>
  );
}

export default MyApp;
