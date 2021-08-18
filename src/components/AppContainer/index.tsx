import React, { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Menu } from '@components/Menu';

import { Container } from './styles';

type AppContainerProps = {
  children: ReactNode;
};

export default function AppContainer({
  children,
}: AppContainerProps): JSX.Element {
  return (
    <div>
      <Container>
        <section>
          <Menu />
        </section>

        <section>
          {children}

          <Footer />
        </section>
      </Container>
    </div>
  );
}
