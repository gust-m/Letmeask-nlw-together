import styled, { css } from 'styled-components';

type ButtonProps = {
  outlined: boolean;
};

export const ButtonStyled = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  transition: filter 0.2s, background-color 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
    color: #fefefe;
    background: #ff726f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${props =>
    props.outlined &&
    css`
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}
`;
