import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AssetsProvider } from '@hooks/useAssets';
import { UsersProvider } from '@hooks/useUsers';

import { Container } from '@styles/general-pages';
import GlobalStyles from '@styles/globals';

import ShapeEllipseBkg from '@assets/icons/bkg-shape-ellipse.svg';
import ShapeBkg from '@assets/icons/bkg-shape.svg';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <AssetsProvider>
        <UsersProvider>
          <ShapeBkg />
          <Container>
            <Component {...pageProps} />
          </Container>
          <ShapeEllipseBkg />
        </UsersProvider>
      </AssetsProvider>

      <GlobalStyles />
    </>
  );
}

export default MyApp;
