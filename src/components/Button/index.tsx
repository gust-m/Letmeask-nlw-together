/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  isOutlined = false,
  ...rest
}: ButtonProps) => {
  return <ButtonStyled outlined={isOutlined} {...rest} />;
};
