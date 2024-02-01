import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import useAnalytics from "lib/analytics";
import Layout from "components/Layout";
import { DefaultSeo } from "next-seo";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { getCookie, setCookie } from "cookies-next";

export default function App(
  props: AppProps & { initialColorScheme: ColorScheme },
) {
  useAnalytics();
  const { Component, pageProps, initialColorScheme } = props;
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(initialColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <DefaultSeo
        defaultTitle="CPT Movements Tracker"
        titleTemplate="%s | CPT Movements Tracker"
        canonical="https://cpt.daveroverts.nl"
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  initialColorScheme: getCookie("mantine-color-scheme", ctx) || "dark",
});
