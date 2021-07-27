import React from 'react';

import ArrowDownIcon from '@assets/icons/icon-arrow-down.svg';
import ArrowUpIcon from '@assets/icons/icon-arrow-up.svg';
import ExclamationIcon from '@assets/icons/icon-exclamation.svg';

import { Container } from './styles';

type AssetInfoProps = {
  assetInfo: {
    id: number;
    status: string;
    healthscore: number;
    name: string;
  };
};

export const CardDetail = ({
  assetInfo: { name, status, healthscore },
}: AssetInfoProps): JSX.Element => {
  const assetStatus =
    status === 'inAlert'
      ? 'Em Alerta'
      : status === 'inOperation'
      ? 'Em Operação'
      : 'Em Parada';

  return (
    <Container>
      <p>{name}</p>

      <p>
        <span>{assetStatus}</span>

        {status === 'inAlert' ? (
          <span>
            {healthscore}% <ExclamationIcon />
          </span>
        ) : status === 'inOperation' ? (
          <span>
            {healthscore}% <ArrowUpIcon />
          </span>
        ) : (
          <span>
            {healthscore}% <ArrowDownIcon />
          </span>
        )}
      </p>
    </Container>
  );
};
