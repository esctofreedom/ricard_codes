import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// import font sofia pro
// import "../public/fonts/sofia-400.woff2";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
