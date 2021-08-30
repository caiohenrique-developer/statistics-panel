import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  padding: 1rem 0;

  p {
    font-size: 0.875rem;
    color: var(--ice_CAC);
    text-align: center;

    a {
      color: var(--purple);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
