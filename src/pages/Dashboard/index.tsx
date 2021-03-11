import React from 'react';
import { Header } from '../../components/Header';

import {
  Container,
  DashboardContainer,
  DashboardHeader,
  DashboardInfos,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header />

    <DashboardContainer>
      <DashboardHeader />
      <DashboardInfos />
    </DashboardContainer>
  </Container>
);

export default Dashboard;
