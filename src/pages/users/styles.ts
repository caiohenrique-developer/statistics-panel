import styled from 'styled-components';

export const Container = styled.div`
  .content {
    display: grid;
    gap: 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

    .user-card {
      padding: 0 2rem 1.25rem;
      border-radius: 0.625rem;
      border: 1px solid var(--gray_4D4);

      div {
        top: -40px;
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
