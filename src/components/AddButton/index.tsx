import React, { ButtonHTMLAttributes } from 'react';
import { ContainerButton } from './styles';

const AddButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <ContainerButton {...rest} type="button">
    {children}
  </ContainerButton>
);

export default AddButton;
