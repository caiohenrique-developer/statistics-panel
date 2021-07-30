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
              <div>
                <Image
                  src='https://i.pravatar.cc/300'
                  alt='Foto do usuário'
                  width={88}
                  height={88}
                />

                <h3>Lorem Ipsun</h3>

                <p>testando@teste.com.br</p>

                <span>
                  <strong>Unidade</strong> | Empresa
                </span>
              </div>
            </div>
            <div className='user-card'>
              <div>
                <Image
                  src='https://i.pravatar.cc/150'
                  alt='Foto do usuário'
                  width={88}
                  height={88}
                />

                <h3>Lorem Ipsun</h3>

                <p>testando@teste.com.br</p>

                <span>
                  <strong>Unidade</strong> | Empresa
                </span>
              </div>
            </div>
          </main>
        </section>
      </main>
    </Container>
  );
}
