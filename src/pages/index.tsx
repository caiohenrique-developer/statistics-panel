import React from 'react';

import Head from 'next/head';

import { CardDetail } from '@components/CardDetail';
import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { Container } from '@styles/home';

import ShapeEllipseBkg from '@assets/icons/bkg-shape-ellipse.svg';
import ShapeBkg from '@assets/icons/bkg-shape.svg';

export default function Home(): JSX.Element {
  const assetInfo = {
    id: 1,
    status: 'inAlert',
    healthscore: 70,
    name: 'Motor H13D-1',
  };

  return (
    <Container>
      <Head>
        <title>Home | Statistics Panel</title>
      </Head>

      <ShapeBkg />

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header />

          <div>
            <CardDetail assetInfo={assetInfo} />
            <CardDetail assetInfo={assetInfo} />
            <CardDetail assetInfo={assetInfo} />
          </div>
        </section>
      </main>

      <ShapeEllipseBkg />
    </Container>
  );
}
