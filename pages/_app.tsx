import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import useAnalytics from "lib/analytics";
import { DefaultSeo } from "next-seo";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import Layout from "components/Layout";

export default function App(props: AppProps) {
  useAnalytics();
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <DefaultSeo
        defaultTitle="CPT Movements Tracker"
        titleTemplate="%s | CPT Movements Tracker"
        description="Tool to keep better track of aircraft during CPT's"
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

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: "Open Sans, sans-serif",
            headings: { fontFamily: "Open Sans, sans-serif" },
          }}
        >
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
