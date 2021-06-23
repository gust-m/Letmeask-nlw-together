/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};
