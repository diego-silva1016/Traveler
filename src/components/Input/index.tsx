import React, { InputHTMLAttributes } from 'react';

import { InputComponent, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any;
    config?: object;
    label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder, name, register, config = {}, label = '', ...rest
}) => (
  <>
    {label && <Label>{label}</Label>}
    <InputComponent
      name={name}
      placeholder={placeholder || ''}
      ref={register(config)}
      {...rest}
    />
  </>
);

export default Input;
