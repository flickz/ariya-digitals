import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import App from "next/app";
import Head from "next/head";

const GlobalPageStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Ariya Digitals.</title>
        </Head>
        <GlobalPageStyle />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default MyApp;
