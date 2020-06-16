import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0;
  background: #000000;
  width: 100%;

  header {
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & a {
        color: #fff;
        text-decoration: none;
        font-size: 2rem;
        transition: opacity 0.2s;

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
