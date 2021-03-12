import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { LinkProps } from 'react-router-dom';
import { ContainerButton } from './styles';

const ReturnButton: React.FC<LinkProps> = ({ to }) => (
  <ContainerButton to={to}>
    <FiArrowLeft size={17} color="#A0ACB2" />
  </ContainerButton>
);

export default ReturnButton;
