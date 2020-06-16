import styled from 'styled-components';

export const Container = styled.div`
  ul {
    margin-top: 20px;

    li {
      width: 223px !important;
      height: 329px !important;
      margin: 0 5px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-10px);
      }
    }

    img {
      height: 329px;
      width: 223px;
    }
  }
`;
