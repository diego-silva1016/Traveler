import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiAlertCircle, FiEye } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/SingInInput';
import {
  Container,
  ImageContainer,
  Content,
  SingInContainer,
  ActionsContainer,
  ElementsDiv,
} from './styles';
import Alert from '../../components/Alert';

import { loginValidate } from './SignInValidation';

const SingIn: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    errors,
    getValues,
  } = useForm({
    resolver: yupResolver(loginValidate),
  });
  const history = useHistory();

  const handleLogin = useCallback(data => {
    console.log(data);
    history.push('/dashboard');
  }, [history]);

  return (
    <Container>
      <ImageContainer />
      <Content>
        <ElementsDiv>
          <SingInContainer>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1>Fazer login</h1>
              <Input
                name="email"
                inputStyle={{ borderRadius: '10px 10px 0px 0px' }}
                placeholder="E-mail"
                type="email"
                register={register}
              />
              {console.log(errors)}
              <Input
                name="senha"
                inputStyle={{ borderRadius: '0px 0px 10px 10px' }}
                type="password"
                placeholder="Senha"
                register={register}
              />

              <ActionsContainer>
                <Checkbox
                  name="lembrar"
                  checked={checked}
                  label="Lembrar-me"
                  handleClick={() => setChecked(!checked)}
                />

                <Link to="/">
                  <span>Esqueci minha senha</span>
                </Link>
              </ActionsContainer>

              <Button type="submit">Acessar plataforma</Button>
            </form>
          </SingInContainer>

          <Alert>Acesso restrito à sócios e moderadores</Alert>
        </ElementsDiv>
      </Content>
    </Container>
  );
};
export default SingIn;
