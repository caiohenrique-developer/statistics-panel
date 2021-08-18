import React from 'react';

import { Container } from './styles';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const year = currentYear > 2021 ? `2021 - ${currentYear}` : currentYear;

  return (
    <Container className='footer'>
      <p>
        Copyright &copy; {year} Statistics Panel, done with ☕ by{' '}
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
