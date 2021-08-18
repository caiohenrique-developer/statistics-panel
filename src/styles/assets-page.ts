import styled from 'styled-components';

export const Container = styled.main`
  &.content > div {
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    .asset-card {
      padding: 1rem;
      border-radius: 0.625rem;
      border: 1px solid var(--gray_4D4);

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;

        color: var(--ice_CAC);

        > div {
          border-radius: 0.625rem 0.625rem 0 0;
        }

        h3 {
          margin: 2rem auto 1rem;
          font-size: 1.25rem;
        }

        ul {
          list-style: circle;
          padding-left: 20px;

          li p {
            font: var(--PoppinsLight);
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
