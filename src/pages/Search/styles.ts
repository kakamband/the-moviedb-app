import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;

  h1 {
    font-size: 6rem;
  }
`;

export const Form = styled.form`
  margin-top: 4rem;
  max-width: 70rem;
  display: flex;

  input {
    flex: 1;
    height: 5rem;
    width: 60rem;
    padding: 0 2rem;
    border: 0;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    background: #e5e5e5;
    border-right: 0;
    color: #524b4b;
    font-size: 2rem;

    &::placeholder {
      color: #524b4b;
      font-size: 2rem;
      padding: 0 2rem;
    }
  }

  button {
    padding: 0 4rem;
    margin-left: -5rem;

    font-size: 1.5rem;
  }
`;

export const Error = styled.span`
  color: #c53030;
  margin-top: 8px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
