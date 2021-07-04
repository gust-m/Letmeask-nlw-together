import styled, { css } from 'styled-components';

interface IconButtonProps {
  highlighted?: boolean;
}

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  padding: 0 20px;

  @media (max-width: 440px) {
    header {
      padding: 24px 12px;
    }
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }

  div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }

  @media (max-width: 660px) {
    div {
      gap: 12px;

      button {
        span {
          display: none;
        }
      }
    }
  }

  @media (max-width: 380px) {
    div {
      display: flex;
      gap: 16px;

      button:last-child {
        height: 40px;
        padding: 16px;
      }
    }
  }
`;

export const BoxTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 0.875rem;
  }

  @media (max-width: 440px) {
    align-items: flex-start;
    flex-direction: column;

    span {
      margin-left: auto;
    }
  }
`;

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    > div {
      footer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;

        .icons {
          margin-left: auto;
        }
      }
    }
  }
`;

export const IconButton = styled.button<IconButtonProps>`
  border: 0;
  background: transparent;

  ${props =>
    props.highlighted &&
    css`
      svg path {
        stroke: #000;
      }
    `}
`;
