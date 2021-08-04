import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useUnits } from '@hooks/useUnits';

import HomeIcon from '@assets/icons/icon-home.svg';

import { Container } from '../../styles/company-page';

export default function Company(): JSX.Element {
  const { unitsApiData } = useUnits();

  const companyName = unitsApiData[0]?.company;

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

          <main className='content'>
            <div>
              <div className='banner'>
                <Image
                  src='/images/main-banner-2-1030x290.jpg'
                  width={1200}
                  height={200}
                />
                <h2>{companyName}</h2>
              </div>

              <h2>Unidades</h2>

              <div className='unity-card'>
                {unitsApiData.map(({ company, unityName }) => (
                  <div>
                    <HomeIcon />

                    <h3>{unityName}</h3>

                    <p>{company}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </section>
      </main>
    </Container>
  );
}
