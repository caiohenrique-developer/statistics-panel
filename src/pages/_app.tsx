import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AssetsProvider } from '@hooks/useAssets';

import GlobalStyles from '@styles/globals';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <AssetsProvider>
        <Component {...pageProps} />
      </AssetsProvider>

      <GlobalStyles />
    </>
  );
}

export default MyApp;
