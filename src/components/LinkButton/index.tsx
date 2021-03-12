import React from 'react';
import { LinkProps } from 'react-router-dom';
import { ContainerButton } from './styles';

const LinkButton: React.FC<LinkProps> = ({ to, children }) => (
  <ContainerButton to={to}>
    {children}
  </ContainerButton>
);

export default LinkButton;
