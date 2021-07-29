import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

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

          <main className='content'>
            <div className='user-card'>
              <Image
                src='https://i.pravatar.cc/300'
                alt='Foto do usuário'
                width={88}
                height={88}
              />
              <h3>Nome</h3>
            </div>
            <div className='user-card'>
              <Image
                src='https://i.pravatar.cc/300'
                alt='Foto do usuário'
                width={88}
                height={88}
              />
              <h3>Nome</h3>
            </div>
          </main>
        </section>
      </main>
    </Container>
  );
}
