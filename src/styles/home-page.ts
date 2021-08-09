import styled from 'styled-components';

export const Container = styled.div`
  .content > div:last-of-type {
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    margin-top: 3rem;
  }
`;
