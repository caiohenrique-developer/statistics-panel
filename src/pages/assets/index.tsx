import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { Header } from '@components/Header';
import { Menu } from '@components/Menu';

import { useAssets } from '@hooks/useAssets';

import { Container } from '@styles/assets-page';

export default function Assets(): JSX.Element {
  const { assetsApiData } = useAssets();

  return (
    <Container>
      <Head>
        <title>Ativos | Statistics Panel</title>
      </Head>

      <main>
        <section>
          <Menu />
        </section>

        <section>
          <Header pageTitle='Ativos' />

          <main className='content'>
            <div>
              {assetsApiData.map(
                ({
                  companyId,
                  healthscore,
                  id,
                  image,
                  metrics: { totalCollectsUptime, totalUptime, lastUptimeAt },
                  model,
                  name,
                  sensors,
                  specifications: { maxTemp },
                  status,
                  unitId,
                }) => {
                  return (
                    <div key={id} className='assety-card'>
                      <div>
                        <Image
                          src={image}
                          alt='Foto dos equipamentos das fábricas'
                          width={1000}
                          height={1000}
                        />

                        <h3>{name || 'Nome'}</h3>

                        <ul>
                          <li>
                            <p>Saúde em: {healthscore}%</p>
                          </li>
                          <li>
                            <p>
                              Total de Coletas Uptime(Ligada):{' '}
                              {totalCollectsUptime}
                            </p>
                          </li>
                          <li>
                            <p>
                              Total de Horas de Coletas Uptime(Ligada):{' '}
                              {totalUptime}
                            </p>
                          </li>
                          <li>
                            <p>
                              Data da Última Coleta Uptime(Ligada):{' '}
                              {lastUptimeAt}
                            </p>
                          </li>
                          <li>
                            <p>Modelo: {model}</p>
                          </li>
                          <li>
                            <p>Sensor: {sensors}</p>
                          </li>
                          <li>
                            <p>Temperatura Máxima em Celsius: {maxTemp}</p>
                          </li>
                          <li>
                            <p>Estado atual: {status}</p>
                          </li>
                          <li>
                            <p>Unidade: {unitId}</p>
                          </li>
                          <li>
                            <p>Empresa: {companyId}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </main>
        </section>
      </main>
    </Container>
  );
}
