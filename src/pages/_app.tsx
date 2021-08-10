import React from 'react';
import MediaQuery from 'react-responsive';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AssetsProvider } from '@hooks/useAssets';
import { UnitsProvider } from '@hooks/useUnits';
import { UsersProvider } from '@hooks/useUsers';

import '@styles/responsive.scss';
import ShapeEllipseBkg from '@assets/icons/bkg-shape-ellipse.svg';
import ShapeBkg from '@assets/icons/bkg-shape.svg';

import { Container } from '@styles/general-pages';
import GlobalStyles from '@styles/globals';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { pathname: pathUrl } = useRouter();

  const pageName = pathUrl === '/' ? 'home' : pathUrl.replace('/', '');

  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <AssetsProvider>
        <UsersProvider>
          <UnitsProvider>
            <MediaQuery minDeviceWidth={767}>
              <ShapeBkg />
            </MediaQuery>
            <Container id={pageName}>
              <Component {...pageProps} />
            </Container>
            <MediaQuery minDeviceWidth={767}>
              <ShapeEllipseBkg />
            </MediaQuery>
          </UnitsProvider>
        </UsersProvider>
      </AssetsProvider>

      <GlobalStyles />
    </>
  );
}

export default MyApp;
