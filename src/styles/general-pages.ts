import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  max-height: 880px;
  width: 95%;
  height: 90%;

  margin: auto;
  border-radius: 0.875rem;
  background: var(--dark_212);
  overflow: hidden;

  > div,
  > div > main {
    height: 100%;
  }

  > div > main {
    display: flex;

    section {
      &:last-of-type {
        width: 100%;
        padding: 3rem;

        .content {
          max-height: 90%;
          overflow-y: overlay;

          > div {
            margin-right: 1.5rem;
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
      }
    }
  }
`;
