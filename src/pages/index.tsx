import React from 'react';

import Head from 'next/head';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { CardDetail } from '@components/CardDetail';
import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useAssets } from '@hooks/useAssets';

import { Container } from '@styles/home-page';

import { highchartsOptions } from '@utils/highchartsOptions';

export default function Home(): JSX.Element {
  const { assetsApiData } = useAssets();

  const barGraphOption = highchartsOptions(assetsApiData);

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

          <main className='content'>
            <div>
              {assetsApiData.map(({ id, status, healthscore, name }) => {
                const assetInfo = { status, healthscore, name };

                return <CardDetail key={id} assetInfo={assetInfo} />;
              })}
            </div>

            <HighchartsReact highcharts={Highcharts} options={barGraphOption} />
          </main>
        </section>
      </main>
    </Container>
  );
}
