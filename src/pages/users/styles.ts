import styled from 'styled-components';

export const Container = styled.div`
  .content {
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    .user-card {
      padding: 0 2rem 3rem;
      border-radius: 0.625rem;
      border: 1px solid var(--gray_4D4);

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;

        color: var(--ice_CAC);
        margin-top: -2.5rem;

        > div {
          border-radius: 50%;
        }

        h3 {
          margin: 2rem auto 0.5rem;
          font-size: 1.25rem;
        }

        p {
          font: var(--PoppinsLight);
          font-size: 0.875rem;
        }

        span {
          font-size: 0.875rem;
          color: var(--ice_EBE);

          margin: 1rem auto;
          padding: 0.4rem 0.85rem;
          background: var(--gray_4C4);
          border-radius: 0.525rem;
        }
      }
    }
  }
`;
