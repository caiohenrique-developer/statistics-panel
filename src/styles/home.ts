import styled from 'styled-components';

export const Container = styled.div`
  .content {
    > div:first-of-type {
      display: grid;
      gap: 1.875rem;
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

      margin-bottom: 3rem;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 0;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--dark_282);
      border-radius: 5px;
    }
  }

  .card-detail-graph {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 15.125rem;
    background: var(--dark_282);
    border: 1px solid var(--gray_4D4);
    border-radius: 0.813rem;
    padding: 1.5rem;

    p {
      color: var(--ice_CAC);
      font-size: 1.25rem;

      &:first-of-type {
        font-weight: 600;
      }
      &:last-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font: var(--PoppinsRegular);

          &:last-of-type {
            display: flex;
            align-items: center;

            color: var(--gray_979);
          }
        }
      }
    }
  }
`;
