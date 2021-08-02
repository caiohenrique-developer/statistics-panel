import React from 'react';

import Head from 'next/head';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { Container } from '../../styles/company-page';

export default function Company(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Empresa | Statistics Panel</title>
      </Head>

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header pageTitle='Empresa e Unidades' />

          <main className='content'>CONTENT</main>
        </section>
      </main>
    </Container>
  );
}
