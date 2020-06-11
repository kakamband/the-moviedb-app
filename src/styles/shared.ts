import styled from 'styled-components';

export const Section = styled.div`
  margin-top: 60px;

  h1 {
    margin-left: 20px;
  }

  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 10px;
      }

      img {
        height: 329px;
      }
    }

    a {
      display: flex;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;
