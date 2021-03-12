import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import Alert from '../../components/Alert';
import LinkButton from '../../components/LinkButton';
import Input from '../../components/Input';
import InputFile from '../../components/InputFIle';
import Pagination from '../../components/Pagination';
import ReturnButton from '../../components/ReturnButton';
import TextArea from '../../components/TextArea';
import {
  Container,
  AddCityHeader,
  FormContainer,
  FormDiv,
  TitleContainer,
  NumberContainer,
  ActionContainer,
} from './styles';

const AddCity: React.FC = () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const [page, setPage] = useState(1);

  return (
    <Container>
      <AddCityHeader>
        <ReturnButton to="/dashboard" />

        <h2>Adicionar uma cidade</h2>

        <Pagination
          pageCount={2}
          page={page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
        />
      </AddCityHeader>

      <FormContainer>
        <FormDiv>
          <TitleContainer>
            <NumberContainer>
              <span>{`0${page}`}</span>
            </NumberContainer>
            <h1>Adicionar cidade</h1>
          </TitleContainer>

          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <h2>Dados da cidade</h2>
            <Input name="DiegadaCruzeiro" label="Nome da cidade" register={register} config={{ required: true }} />
            <InputFile name="file" label="Foto da cidade" register={register} config={{ required: true }} />
            <TextArea
              name="descricao"
              label="Descrição da cidade"
              register={register}
              config={{ required: true }}
              maxLength={320}
            />

            <ActionContainer>
              <Alert>
                Preencha todos os
                dados com cuidado.
              </Alert>
              <LinkButton to="/">Próximo</LinkButton>
            </ActionContainer>

          </form>
        </FormDiv>

      </FormContainer>
    </Container>
  );
};

export default AddCity;
