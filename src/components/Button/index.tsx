import React from 'react';
import { ContainerButton } from './style';

const Button: React.FC = ({ children }) => (
  <ContainerButton type="submit">
    {children}
  </ContainerButton>
);

export default Button;
