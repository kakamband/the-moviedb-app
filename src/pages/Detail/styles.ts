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
  margin-top: 20%;
`;

export const Content = styled.div`
  width: 600px;
  height: 100%;
  padding: 0 50px 0;
`;

export const ContentText = styled.div`
  & h3 {
    font-size: 20px;
    color: #a09999;
    padding-bottom: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;

  h1 {
    font-size: 48px;

    & span {
      font-size: 20px;
      color: #a09999;
      align-self: flex-end;
      margin-left: 10px;
    }
  }
`;

export const About = styled.p`
  font-size: 24px;
  padding: 45px 0;
`;

export const MoreInfo = styled.div`
  li {
    list-style: none;
    color: #e9e9e9;

    & strong {
      margin-right: 5px;
    }

    + li {
      margin-top: 2px;
    }
  }
`;

export const ContentButton = styled.div`
  padding: 10% 0;

  button {
    width: 223px;
    height: 41px;
  }
`;

export const ContentImg = styled.div`
  display: flex;

  img {
    width: 457px;
    height: 684px;
  }
`;
