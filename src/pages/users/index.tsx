import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import AppContainer from '@components/AppContainer';
import { Header } from '@components/Header';

import { useUsers } from '@hooks/useUsers';

import { Container } from '@styles/users-page';

export default function Users(): JSX.Element {
  const { usersApiData } = useUsers();

  return (
    <AppContainer>
      <Head>
        <title>Usuários | Statistics Panel</title>
      </Head>

      <Header pageTitle='Usuários' />

      <Container className='content'>
        <div>
          {usersApiData.map(
            ({ unity, userID, company, userName, userEmail }) => {
              const srcAvatarSize = (Math.random() * 2.5)
                .toFixed(2)
                .replace('.', '');

              return (
                <div key={userID} className='user-card'>
                  <div>
                    <Image
                      src={`https://i.pravatar.cc/${srcAvatarSize}`}
                      alt='Foto do usuário'
                      width={88}
                      height={88}
                    />

                    <h3>{userName || 'Nome'}</h3>

                    <p>{userEmail || 'E-mail'}</p>

                    <span>
                      <strong>{unity || 'Unidade'}</strong>
                      {company || 'Empresa'}
                    </span>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </Container>
    </AppContainer>
  );
}
