/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import useAnalytics from "lib/analytics";

export default function App(props: AppProps) {
  useAnalytics();
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>CPT Movements Tracker</title>
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
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
