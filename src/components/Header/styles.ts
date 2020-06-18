import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 0;
  background: #000000;
  width: 100%;

  header {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & a {
        color: #fff;
        text-decoration: none;
        font-size: 3rem;
        transition: opacity 0.2s;

        & + a {
          margin-left: 5rem;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
