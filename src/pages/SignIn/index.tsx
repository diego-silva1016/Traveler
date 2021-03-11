import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiAlertCircle, FiEye } from 'react-icons/fi';
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
  const history = useHistory();

  const handleLogin = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

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
              type="email"
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              name="senha"
              inputStyle={{ borderRadius: '0px 0px 10px 10px' }}
              type="password"
              placeholder="Senha"
            />

            <ActionsContainer>
              <Checkbox checked={checked} label="Lembrar-me" handleClick={() => setChecked(!checked)} />

              <Link to="/">
                <span>Esqueci minha senha</span>
              </Link>
            </ActionsContainer>

            <Button onClick={handleLogin}>Acessar plataforma</Button>
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
