import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ConfigIcon from '@assets/icons/icon-cfg.svg';
import ContentIcon from '@assets/icons/icon-content.svg';
import HomeIcon from '@assets/icons/icon-home.svg';
import InboxIcon from '@assets/icons/icon-inbox.svg';
import PersonIcon from '@assets/icons/icon-person.svg';
import StatsIcon from '@assets/icons/icon-stats.svg';
import ViewIcon from '@assets/icons/icon-view.svg';

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
            <button type='button' disabled>
              <HomeIcon />
            </button>
          </li>
          <li>
            <button type='button' disabled>
              <ContentIcon />
            </button>
          </li>
          <li>
            <button type='button' disabled>
              <PersonIcon />
            </button>
          </li>
          <li>
            <button type='button' disabled>
              <InboxIcon />
            </button>
          </li>
          <li>
            <button type='button' disabled>
              <ViewIcon />
            </button>
          </li>
          <li>
            <button type='button'>
              <StatsIcon />
            </button>
          </li>
          <li>
            <button type='button' disabled>
              <ConfigIcon />
            </button>
          </li>
        </ul>
      </nav>

      <span />
    </Container>
  );
};
