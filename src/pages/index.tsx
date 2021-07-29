import React from 'react';

import Head from 'next/head';

import { CardDetail } from '@components/CardDetail';
import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useAssets } from '@hooks/useAssets';

import { Container } from '@styles/home';

// import ShapeEllipseBkg from '@assets/icons/bkg-shape-ellipse.svg';
// import ShapeBkg from '@assets/icons/bkg-shape.svg';

export default function Home(): JSX.Element {
  const { assetsApiData } = useAssets();

  return (
    <Container>
      <Head>
        <title>Home | Statistics Panel</title>
      </Head>

      {/* <ShapeBkg /> */}

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header />

          <div className='card-detail-container'>
            <div>
              {assetsApiData.map(({ id, status, healthscore, name }) => {
                const assetInfo = { id, status, healthscore, name };

                return <CardDetail assetInfo={assetInfo} />;
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

      {/* <ShapeEllipseBkg /> */}
    </Container>
  );
}
