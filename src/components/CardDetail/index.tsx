import React from 'react';

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
  return (
    <Container>
      <p>{name}</p>
      <p>
        <span>{status}</span>
        <span>{healthscore}</span>
      </p>
    </Container>
  );
};
