import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f8f8f8;
    color: #29292e;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1366px) {
    html {
      font-size: 97.5%;
    }
  }
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 90%;
    }
  }

  @media(max-width: 480px) {
    html {
      font-size: 86.25%;
    }
  }

  @media(max-width: 360px) {
    html {
      font-size: 82.5%;
    }
  }

  @media(max-width: 240px) {
    html {
      font-size: 78.75%;
    }
  }
`;
