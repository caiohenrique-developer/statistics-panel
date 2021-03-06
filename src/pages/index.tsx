import React from 'react';

import Head from 'next/head';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import AppContainer from '@components/AppContainer';
import { CardDetail } from '@components/CardDetail';
import { Header } from '@components/Header';

import { useAssets } from '@hooks/useAssets';

import { HighchartsGraph } from '@styles/highcharts-graph';
import { Container } from '@styles/home-page';

import { highchartsOptions } from '@utils/highchartsOptions';

export default function Home(): JSX.Element {
  const { assetsApiData } = useAssets();

  const { barGraphOption, discGraphOption } = highchartsOptions(assetsApiData);

  return (
    <AppContainer>
      <Head>
        <title>Home | Statistics Panel</title>
      </Head>

      <Header pageTitle='Estatísticas' />

      <Container className='content'>
        <HighchartsGraph>
          <HighchartsReact highcharts={Highcharts} options={barGraphOption} />
          <HighchartsReact highcharts={Highcharts} options={discGraphOption} />
        </HighchartsGraph>

        <div>
          {assetsApiData.map(({ id, status, healthscore, name }) => {
            const assetInfo = { status, healthscore, name };

            return <CardDetail key={id} assetInfo={assetInfo} />;
          })}
        </div>
      </Container>
    </AppContainer>
  );
}
