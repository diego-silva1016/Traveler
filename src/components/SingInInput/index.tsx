import React, { InputHTMLAttributes, useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container, IconContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputStyle ?: object;
    placeholder: string;
    name: string;
    type: string;
    register: any;
    config?: object;
}

const Input: React.FC<InputProps> = ({
  inputStyle = {}, placeholder, name, type, register, config = {}, ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container style={inputStyle}>
      <input
        name={name}
        placeholder=" "
        autoComplete="off"
        type={visible && type === 'password' ? 'text' : type}
        ref={register(config)}
        {...rest}
      />
      <label htmlFor={name}>{placeholder}</label>

      {type === 'password' && (
      <IconContainer onClick={() => setVisible(!visible)}>
        {visible ? <FiEyeOff size={22} color="#F25D27" /> : <FiEye size={22} color="#A0ACB2" />}
      </IconContainer>
      )}

    </Container>
  );
};

export default Input;
