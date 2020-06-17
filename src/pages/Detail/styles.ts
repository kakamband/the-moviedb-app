import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Box = styled.div`
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    padding: 2rem;
    align-self: center;
  }
`;

export const ContentAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    margin-top: 2rem;
  }
`;

export const ContentCol = styled.div`
  width: 40rem;
  height: auto;
  padding: 0 1rem;
`;

export const ContentText = styled.div`
  padding-right: 2rem;
  & h3 {
    font-size: 2rem;
    color: #a09999;
    padding: 1rem 0;
  }

  justify-content: center;
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
  font-size: 1.5rem;
  li {
    list-style: none;
    color: #e9e9e9;

    & strong {
      margin-right: 0.5rem;
    }

    + li {
      margin-top: 0.2rem;
    }
  }
`;

export const ContentButton = styled.div`
  padding: 3rem 0;

  button {
    width: 223px;
    height: 40px;
  }
`;

export const ContentImg = styled.div`
  img {
    width: auto;
    height: 70rem;
  }

  @media (max-width: 576px) {
    img {
      height: 50rem;
      margin-bottom: 2rem;
    }
  }
`;
