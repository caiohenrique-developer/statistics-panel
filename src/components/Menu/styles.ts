import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 6rem;
  height: 100%;

  background: var(--dark_282);
  border: 1px solid var(--gray_4D4);
  padding: 3rem 0;

  > a,
  nav li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
  }

  nav ul li {
    & + li {
      margin-top: 0.313rem;
    }

    button {
      width: 100%;
      height: 100%;
    }
  }
`;
