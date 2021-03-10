import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/SingInInput';
import {
  Container,
  ImageContainer,
  Content,
  SingInContainer,
  ActionsContainer,
  AlertContainer,
  ElementsDiv,
} from './styles';

const SingIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <ImageContainer />
      <Content>
        <ElementsDiv>
          <SingInContainer>
            <h1>Fazer login</h1>
            <Input
              name="email"
              inputStyle={{ borderRadius: '10px 10px 0px 0px' }}
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              name="senha"
              inputStyle={{ borderRadius: '0px 0px 10px 10px' }}
              placeholder="Senha"
              type="password"
            />

            <ActionsContainer>
              <Checkbox checked={checked} handleClick={() => setChecked(!checked)} />

              <Link to="/">
                <span>Esqueci minha senha</span>
              </Link>
            </ActionsContainer>

            <Button>Acessar plataforma</Button>
          </SingInContainer>

          <AlertContainer>
            <FiAlertCircle size={50} color="red" />
            <p>Acesso restrito à sócios e moderadores</p>
          </AlertContainer>
        </ElementsDiv>
      </Content>
    </Container>
  );
};
export default SingIn;
