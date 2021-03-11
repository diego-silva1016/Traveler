import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import AddButon from '../../components/AddButton';

import {
  Container,
  DashboardContainer,
  DashboardHeader,
  DashboardInfos,
} from './styles';
import DashboardCities from './DashboardCities';

const Dashboard: React.FC = () => (
  <Container>
    <Header />

    <DashboardContainer>
      <DashboardHeader>
        <h1>Cidades</h1>

        <AddButon>
          <FiPlus />
          Adicionar um perfil
        </AddButon>
      </DashboardHeader>
      <DashboardCities />
    </DashboardContainer>
  </Container>
);

export default Dashboard;
