import React from 'react';

import Head from 'next/head';

import { CardDetail } from '@components/CardDetail';
import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useAssets } from '@hooks/useAssets';

import { Container } from '@styles/home';

export default function Home(): JSX.Element {
  const { assetsApiData } = useAssets();

  return (
    <Container>
      <Head>
        <title>Home | Statistics Panel</title>
      </Head>

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header pageTitle='Estatísticas' />

          <div className='content'>
            <div>
              {assetsApiData.map(({ id, status, healthscore, name }) => {
                const assetInfo = { id, status, healthscore, name };

                return <CardDetail key={id} assetInfo={assetInfo} />;
              })}
            </div>

            <div className='card-detail-graph'>
              <p>Gráfico dos status</p>

              <p>
                <span>assetStatus</span>

                <span>healthscore %</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
