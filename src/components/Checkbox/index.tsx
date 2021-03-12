import React, { MouseEventHandler, InputHTMLAttributes } from 'react';
import { FiCheck } from 'react-icons/fi';
import { CheckboxContainer, Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    handleClick: MouseEventHandler<HTMLDivElement>;
    checked: boolean;
    label?: string;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  name,
  handleClick,
  ...rest
}) => (
  <CheckboxContainer {...rest}>
    <Container htmlFor={name} checked={checked}>
      {checked && <FiCheck size={20} color="#fff" />}
      <input
        id={name}
        name={name}
        type="checked"
        onClick={handleClick}
        {...rest}
      />
    </Container>

    { label && <p>{label}</p> }

  </CheckboxContainer>
);

export default Checkbox;
