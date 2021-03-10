import React, { MouseEventHandler } from 'react';
import { FiCheck } from 'react-icons/fi';
import { CheckboxContainer, Container } from './styles';

interface CheckboxProps {
    handleClick: MouseEventHandler<HTMLDivElement>;
    checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, handleClick, ...rest }) => (
  <CheckboxContainer {...rest}>
    <Container checked={checked} onClick={handleClick}>
      {checked && <FiCheck color="#fff" size={16} />}
    </Container>

    <p>Lembrar-me</p>
  </CheckboxContainer>
);

export default Checkbox;
