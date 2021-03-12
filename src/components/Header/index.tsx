import React from 'react';

import {
  FiPower, FiMapPin, FiGrid, FiMessageSquare,
} from 'react-icons/fi';
import Logo from '../../assets/Logo.png';

import { Container, ActionsContainer } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={Logo} alt="Logo" />

    <ActionsContainer>
      <FiMapPin size={24} color="#fff" />
      <FiGrid size={24} color="#fff" />
      <FiMessageSquare size={24} color="#fff" />
    </ActionsContainer>

    <FiPower size={24} color="#fff" />
  </Container>
);

export default Header;
