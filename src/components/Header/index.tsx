import React from 'react';

import { Container } from './styles';

type HeaderProps = {
  pageTitle: string;
};

export const Header = ({ pageTitle }: HeaderProps): JSX.Element => (
  <Container>
    <h1>{pageTitle}</h1>
  </Container>
);
