import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Main: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Main;
