import React from 'react';

import Head from 'next/head';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { Container } from '@styles/home';

import ShapeEllipseBkg from '@assets/icons/bkg-shape-ellipse.svg';
import ShapeBkg from '@assets/icons/bkg-shape.svg';

export default function Home(): JSX.Element {
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
        </section>
      </main>

      <ShapeEllipseBkg />
    </Container>
  );
}
