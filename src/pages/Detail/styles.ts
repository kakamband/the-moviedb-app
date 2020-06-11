import styled from 'styled-components';
import { shade } from 'polished';

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
  h1 {
    font-size: 45px;
  }

  h3 {
    font-size: 20px;
    color: #524b4b;
    padding: 10px 0 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

export const About = styled.p`
  font-size: 20px;
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
