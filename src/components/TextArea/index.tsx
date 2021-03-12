import React, { TextareaHTMLAttributes } from 'react';

import {
  Container, TextAreaComponent, Label, P,
} from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    register: any;
    config?: object;
    label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder, name, register, config = {}, label = '', ...rest
}) => (
  <>
    {label && <Label>{label}</Label>}
    <Container>
      <TextAreaComponent
        name={name}
        placeholder={placeholder || ''}
        ref={register(config)}
        {...rest}
      />
      <P>Máximo 320 caracteres</P>
    </Container>
  </>
);

export default TextArea;
