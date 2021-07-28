import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 8rem;
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

          svg {
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
`;
