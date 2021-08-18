import React from 'react';

import { Container } from './styles';

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <p>
        Copyright © 2021 Statistics Panel, done with ☕ by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/caiohenrique-developer/statistics-panel'
        >
          caiohenrique-developer
        </a>
        .
      </p>
    </Container>
  );
};
