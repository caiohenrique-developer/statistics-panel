import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HomeIcon from '@assets/icons/home.svg';
import StatsIcon from '@assets/icons/stats.svg';

import { Container } from './styles';

export const Menu = (): JSX.Element => {
  return (
    <Container>
      <Link href='/'>
        <a>
          <Image
            src='/images/app-logo.png'
            alt='Application logotipo'
            width={42}
            height={24}
          />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <button type='button'>
              <HomeIcon />
            </button>
          </li>
          <li>
            <button type='button'>
              <StatsIcon />
            </button>
          </li>
        </ul>
      </nav>

      <span />
    </Container>
  );
};
