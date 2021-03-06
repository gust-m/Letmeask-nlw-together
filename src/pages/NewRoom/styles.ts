import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Logo = styled.aside`
  flex: 7;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sens-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 1.5rem;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`;

export const SignIn = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 16px;
      }
    }

    p {
      font-size: 0.875rem;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
        margin-left: 4px;
      }
    }
  }
`;
