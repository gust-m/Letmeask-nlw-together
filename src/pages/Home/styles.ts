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

  @media (max-width: 900px) {
    max-width: 50%;
  }

  @media (max-width: 820px) {
    strong,
    p {
      display: none;
    }
  }

  @media (max-width: 640px) {
    display: none;
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

    > button {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    span {
      font-size: 0.875rem;
      color: #a8a8b3;

      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-right: 16px;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-left: 16px;
      }
    }
  }
`;
