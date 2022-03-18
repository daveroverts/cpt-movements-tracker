import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import useAnalytics from "lib/analytics";
import Layout from "components/Layout";
import { DefaultSeo } from "next-seo";

export default function App(props: AppProps) {
  useAnalytics();
  const { Component, pageProps } = props;

  return (
    <>
      <DefaultSeo
        defaultTitle="CPT Movements Tracker"
        titleTemplate="%s | CPT Movements Tracker"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://cpt.daveroverts.nl",
        }}
        twitter={{
          handle: "@daveroverts",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
