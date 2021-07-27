import React from 'react';

import Head from 'next/head';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { Container } from '@styles/home';

import ShapeBkg from '@assets/shape-bkg.svg';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Statistics Panel</title>
      </Head>

      <ShapeBkg />

      <Container>
        <Menu />
        <Header />
      </Container>
    </>
  );
}
