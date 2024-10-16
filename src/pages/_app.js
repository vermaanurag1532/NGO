import React from "react";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { toast, Toaster } from "react-hot-toast";

export const metadata = {
  description: "Join us in making a difference!",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sevaarth</title>
        <meta name="Sevaarth Description" content={metadata.description} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="top-center" />
    </>
  );
}

export default MyApp;
