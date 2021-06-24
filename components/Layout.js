import React, { Fragment } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Head from "next/head";
export default function Layout({ children, title, description, url }) {
  return (
    <Fragment>
      <Head>
        {title && <title>{title + " | Instantly Creative"}</title>}
        {description && <meta name="description" content={description} />}
        {title && (
          <meta property="og:title" content={title + " | Instantly Creative"} />
        )}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {url && <meta property="og:url" content={url} />}
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
