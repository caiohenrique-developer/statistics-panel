import React from 'react';

import { FetchAssetsProps } from 'utils/types/api';

import ArrowDownIcon from '@assets/icons/icon-arrow-down.svg';
import ArrowUpIcon from '@assets/icons/icon-arrow-up.svg';
import ExclamationIcon from '@assets/icons/icon-exclamation.svg';

import { assetStatus } from '@utils/assetStatus';

import { Container } from './styles';

type DistructureFetchAssetsProps = Pick<
  FetchAssetsProps,
  'name' | 'status' | 'healthscore'
>;

type AssetInfoProps = {
  assetInfo: DistructureFetchAssetsProps;
};

export const CardDetail = ({
  assetInfo: { name, status, healthscore },
}: AssetInfoProps): JSX.Element => (
  <Container>
    <p>{name}</p>

    <p>
      <span>{assetStatus(status)}</span>

      {assetStatus(status) === 'Em Alerta' ? (
        <span>
          {healthscore}% <ExclamationIcon />
        </span>
      ) : assetStatus(status) === 'Em Operação' ? (
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
