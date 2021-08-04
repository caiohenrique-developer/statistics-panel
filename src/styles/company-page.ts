import styled from 'styled-components';

export const Container = styled.div`
  .content > div {
    margin-right: 0 !important;

    .banner {
      position: relative;

      > div {
        filter: brightness(0.5) opacity(0.2);
      }

      h2 {
        position: absolute;
        top: 50%;
        right: 3.125rem;
        bottom: 50%;
        transform: translateY(-50%);

        font-size: 1.75rem;
      }
    }

    h2 {
      font: var(--PoppinsBold);
      color: var(--ice_CAC);
    }

    > h2 {
      margin: 1.25rem 0;
      font-size: 1.25rem;
    }
  }
`;
