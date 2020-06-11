import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0;
  background: #000000;

  header {
    padding: 0 20px;
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
        font-size: 24px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 20px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
