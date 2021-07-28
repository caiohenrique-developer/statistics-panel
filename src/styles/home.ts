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

      max-width: 16.188rem;
      max-height: 13.063rem;
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
          display: grid;
          gap: 1.875rem;
          grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        }
      }
    }
  }
`;
