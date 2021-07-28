import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  > svg {
    position: absolute;

    &:first-of-type {
      top: 0;
      left: 0;

      z-index: -1;

      max-width: 87.75rem;
      max-height: 53.438rem;
    }
    &:last-of-type {
      right: 0;
      bottom: 0;

      max-width: 8vw;
    }
  }

  main {
    display: flex;

    max-width: 1280px;
    max-height: 880px;
    width: 95%;
    height: 95%;

    margin: auto;
    border-radius: 0.875rem;
    background: var(--dark_212);
    overflow: hidden;

    section {
      &:last-of-type {
        width: 100%;
        padding: 3rem;

        .card-detail-container {
          padding-right: 0.5rem;
          max-height: 90%;
          overflow-y: auto;

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
      }
    }
  }
`;
