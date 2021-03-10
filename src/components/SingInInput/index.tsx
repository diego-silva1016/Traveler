import React, { InputHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputStyle ?: object;
    placeholder: string;
    name: string;
}

const Input: React.FC<InputProps> = ({
  inputStyle = {}, placeholder, name, ...rest
}) => (
  <Container style={inputStyle}>
    <input
      name={name}
      placeholder=" "
      autoComplete="off"
      {...rest}
    />
    <label htmlFor={name}>{placeholder}</label>
  </Container>
);

export default Input;
