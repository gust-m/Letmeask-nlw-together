import styled, { css } from 'styled-components';

type LikeButtonProps = {
  liked?: boolean;
};

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
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

  @media (max-width: 440px) {
    button {
      span {
        display: none;
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

  @media (max-width: 340px) {
    align-items: flex-start;
    flex-direction: column;

    span {
      margin-left: auto;
    }
  }
`;

export const Content = styled.main`
  max-width: 840px;
  margin: 0 auto;
  padding: 0 20px;

  > form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }
  }
`;

export const FormFooter = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 16px;

  span {
    font-size: 0.875rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 0.875rem;
      font-weight: 500;
      margin-left: 3px;
    }
  }

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;

    div {
      margin-right: auto;
    }

    > button {
      width: 75%;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;
      margin-bottom: 12px;
    }
  }
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
`;

export const LikeButton = styled.button<LikeButtonProps>`
  border: 0;
  background: transparent;

  display: flex;
  align-items: flex-end;
  gap: 8px;

  color: #737380;
  transition: filter 0.1s;

  &:hover {
    filter: brightness(0.7);
  }

  ${props =>
    props.liked &&
    css`
      color: #835afd;

      svg path {
        stroke: #835afd;
      }
    `}
`;
