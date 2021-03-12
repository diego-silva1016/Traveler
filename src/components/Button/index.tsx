import React, { ButtonHTMLAttributes } from 'react';
import { ContainerButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <ContainerButton {...rest}>
    {children}
  </ContainerButton>
);

export default Button;
