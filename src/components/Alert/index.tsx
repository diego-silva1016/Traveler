import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { AlertContainer } from './styles';

const Alert: React.FC = ({ children }) => (
  <AlertContainer>
    <FiAlertCircle size={50} color="red" />
    <p>{children}</p>
  </AlertContainer>
);

export default Alert;
