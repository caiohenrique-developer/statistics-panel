import styled from 'styled-components';

export const Container = styled.div`
  .content {
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    .user-card {
      height: 8rem;
      padding: 1.25rem;
      border: 1px solid var(--gray_4D4);
      border-radius: 0.625rem;

      div {
        top: -50px;
        left: 50%;
        transform: translateX(-50%);

        border-radius: 50%;
      }

      h3 {
        text-align: center;
        color: var(--ice_CAC);
      }
    }
  }
`;
