import React from 'react';
import { FiPlus } from 'react-icons/fi';
import LinkButton from '../../components/LinkButton';

import {
  Container,
  DashboardHeader,
  CardsContainer,
  ListContainer,
} from './styles';
import CitiesCard from './CitiesCard';

const Dashboard: React.FC = () => (
  <Container>
    <DashboardHeader>
      <h1>Cidades</h1>

      <LinkButton to="/add-city">
        <FiPlus />
        Adicionar uma Cidade
      </LinkButton>
    </DashboardHeader>

    <ListContainer>
      <CardsContainer>
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
        <CitiesCard />
      </CardsContainer>
    </ListContainer>
  </Container>
);

export default Dashboard;
