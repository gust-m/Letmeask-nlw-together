import styled, { css } from 'styled-components';

type ContainerProps = {
  answered: boolean;
  highlighted: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  p {
    color: #29292e;
    word-wrap: break-word;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    ${props =>
      props.highlighted &&
      css`
        span {
          color: #29292e;
        }
      `}

    .icons {
      display: flex;
      gap: 16px;
    }
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.answered &&
    css`
      background: #dbdcdd;
    `}

  ${props =>
    props.highlighted &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;
    `}
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
    color: #737380;
    font-size: 0.875rem;
  }
`;
