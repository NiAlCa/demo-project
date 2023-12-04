import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import { store } from "../store";
import "../styles/styles.scss";
import { appWithTranslation } from "next-i18next";
import Navbar from "../app/Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  type Props = StoreProvider["props"] & { children: React.ReactNode };

  const StoreProvidedCasted =
    StoreProvider as unknown as React.ComponentType<Props>;

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A collection of 11,111 Rusty Robot NFT art pieces on the SHIMMER Network"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon.png"
        ></link>
        <title>Rusty Robot Country Club</title>
      </Head>

      <StoreProvidedCasted store={store}>
        <Navbar />
        <ToastContainer
          position="top-left"
          toastClassName={"info-alert"}
          theme="dark"
          className={"toast-text"}
        />
        <Component {...pageProps} />
      </StoreProvidedCasted>
    </React.Fragment>
  );
}

export default appWithTranslation(App);
