import styled from 'styled-components';

export const Container = styled.main`
  &.content > div {
    margin-right: 0 !important;

    .banner {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        filter: brightness(0.5) opacity(0.2);
      }

      h2 {
        position: absolute;

        font-size: 1.75rem;
        text-align: center;
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

    .unity-card > div {
      display: flex;
      align-items: center;
      flex-direction: column;

      max-width: 15rem;
      color: var(--ice_CAC);
      padding: 2rem;
      border-radius: 0.625rem;
      border: 1px solid var(--gray_4D4);

      & + div {
        margin-top: 1.25rem;
      }

      h3 {
        margin: 1rem auto 0.5rem;
        font-size: 1.25rem;
      }

      p {
        font: var(--PoppinsLight);
        font-size: 0.875rem;
      }
    }
  }
`;
