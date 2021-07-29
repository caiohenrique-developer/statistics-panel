import React from 'react';

import Head from 'next/head';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { Container } from './styles';

export default function Users(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Usuários | Statistics Panel</title>
      </Head>

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header pageTitle='Usuários' />

          <main className='content'>CONTENT</main>
        </section>
      </main>
    </Container>
  );
}
