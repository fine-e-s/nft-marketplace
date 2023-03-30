import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Provider from "@/components/Provider";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
