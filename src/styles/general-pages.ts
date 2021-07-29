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
  > div main {
    height: 100%;
  }

  > div main {
    display: flex;

    section {
      &:last-of-type {
        width: 100%;
        padding: 3rem;

        .content {
          height: 100%;
          max-height: 90%;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
      }
    }
  }
`;
