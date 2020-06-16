import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;
`;

export const Content = styled.div`
  width: 40rem;
  height: 100%;
  padding: 0 5rem 0;
`;

export const ContentText = styled.div`
  & h3 {
    font-size: 2rem;
    color: #a09999;
    padding-bottom: 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;

  h1 {
    font-size: 4rem;

    & span {
      font-size: 2rem;
      color: #a09999;
      align-self: flex-end;
      margin-left: 1rem;
    }
  }
`;

export const About = styled.p`
  font-size: 2rem;
  padding: 4rem 0;
`;

export const MoreInfo = styled.div`
  font-size: 1rem;
  li {
    list-style: none;
    color: #e9e9e9;

    & strong {
      margin-right: 5px;
    }

    + li {
      margin-top: 4px;
    }
  }
`;

export const ContentButton = styled.div`
  padding: 3rem 0;

  button {
    width: 223px;
    height: 41px;
  }
`;

export const ContentImg = styled.div`
  display: flex;

  img {
    width: auto;
    height: 60rem;
  }
`;
