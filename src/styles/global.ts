import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f8f8f8;
    color: #29292e;
    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
