import React, { MouseEventHandler } from 'react';
import { FiCheck } from 'react-icons/fi';
import { CheckboxContainer, Container } from './styles';

interface CheckboxProps {
    handleClick: MouseEventHandler<HTMLDivElement>;
    checked: boolean;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked, label, handleClick, ...rest
}) => (
  <CheckboxContainer {...rest}>
    <Container checked={checked} onClick={handleClick}>
      {checked && <FiCheck color="#fff" size={16} />}
    </Container>

    { label && <p>{label}</p> }

  </CheckboxContainer>
);

export default Checkbox;
