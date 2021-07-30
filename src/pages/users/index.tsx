import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useUsers } from '@hooks/useUsers';

import { Container } from './styles';

export default function Users(): JSX.Element {
  const { usersApiData } = useUsers();

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
            <div>
              {usersApiData.map(({ id, name, email, unitId, companyId }) => {
                const srcAvatarSize = (Math.random() * 2.5)
                  .toFixed(2)
                  .replace('.', '');

                return (
                  <div key={id} className='user-card'>
                    <div>
                      <Image
                        src={`https://i.pravatar.cc/${srcAvatarSize}`}
                        alt='Foto do usuário'
                        width={88}
                        height={88}
                      />

                      <h3>{name}</h3>

                      <p>{email}</p>

                      <span>
                        <strong>{unitId}</strong> | {companyId}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </section>
      </main>
    </Container>
  );
}
