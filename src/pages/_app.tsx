import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@styles/globals';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
