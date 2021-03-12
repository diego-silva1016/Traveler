import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import {
  CardContainer,
  TextContainer,
  ImageContainer,
  ActionsContainer,
} from './styles';

import Image from '../../../assets/image.png';

const DashboardCities: React.FC = () => (
  <CardContainer>
    <ImageContainer>
      <img src={Image} alt="Imagem" />
      <ActionsContainer>
        <button type="button">
          <FiEdit3 color="#617480" size={18} />
        </button>
        <button type="button">
          <FiTrash color="#617480" size={18} />
        </button>
      </ActionsContainer>

    </ImageContainer>

    <TextContainer>
      <strong>Águas mornas</strong>
      <p>13 locais</p>
    </TextContainer>
  </CardContainer>
);

export default DashboardCities;
