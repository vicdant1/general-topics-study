import type { AppProps } from "next/app";
import MainLayout from "../components/Layouts/MainLayout";
import Head from "next/head";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);


  if (["/login", "/404"].includes(appProps.router.pathname))
    return <Component {...pageProps} />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
