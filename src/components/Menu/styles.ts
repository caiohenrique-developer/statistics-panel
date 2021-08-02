import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 6rem;
  height: 100%;

  background: var(--dark_282);
  border-right: 1px solid var(--gray_4D4);
  padding: 3rem 0;

  > a,
  nav li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a {
    height: 2rem;
  }

  nav ul li {
    position: relative;

    height: 3rem;

    & + li {
      margin-top: 0.313rem;
    }

    &.active {
      &:before {
        content: '';

        position: absolute;
        left: -1px;

        width: 0.3rem;
        height: 100%;

        background: var(--purple);
        border-radius: 0 5px 5px 0;
      }

      svg path {
        fill: var(--purple);
      }
    }

    button,
    button a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
    }
  }
`;
