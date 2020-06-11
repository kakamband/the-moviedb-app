import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #111111;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #ffffff;
  }

  #root {
    margin: 0 auto;
    padding: 0;

  }

  button {
    cursor: pointer;
    background: #5a5a5a;
    border: 0;
    font-weight: bold;
    border-radius: 50px;

    &:hover {
      background: ${shade(-0.4, '#5a5a5a')};
    }
  }

`;
