import React, { InputHTMLAttributes } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container, Label } from './styles';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any;
    config?: object;
    label?: string;
}

const InputFile: React.FC<InputFileProps> = ({
  placeholder, name, register, config = {}, label = '', ...rest
}) => (
  <>
    {label && <Label>{label}</Label>}
    <Container htmlFor={name}>
      <FiPlus size={12} />
      Adicionar uma foto
      {' '}
      <input
        id={name}
        name={name}
        placeholder={placeholder || ''}
        ref={register(config)}
        type="file"
        {...rest}
      />
    </Container>
  </>
);

export default InputFile;
