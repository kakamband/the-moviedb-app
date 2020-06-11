import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;

  h1 {
    font-size: 60px;
  }
`;

export const Form = styled.div`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    width: 600px;
    padding: 0 24px;
    border: 0;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    background: #e5e5e5;
    border-right: 0;

    &::placeholder {
      color: #524b4b;
      font-size: 20px;
      padding: 0 20px;
    }
  }

  button {
    padding: 0 30px;
    margin-left: -20px;
  }
`;
