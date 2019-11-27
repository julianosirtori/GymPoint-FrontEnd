import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';

import {
  Container,
  Header,
  ActionHeader,
  ButtonHeader,
  FormHorizontal,
} from '~/styles/pageForm';

export default function NewStudent() {
  return (
    <Container>
      <Header>
        <h1>Gerenciando alunos</h1>
        <ActionHeader>
          <ButtonHeader back={1} to="/student">
            <MdChevronLeft size={20} color="#FFFFFF" />
            VOLTAR
          </ButtonHeader>
          <ButtonHeader to="student/">
            <MdCheck size={20} color="#FFFFFF" />
            SALVAR
          </ButtonHeader>
        </ActionHeader>
      </Header>
      <Form>
        <Input label="NOME COMPLETO" type="text" name="name" />
        <Input label="ENDEREÇO DE EMAIL" type="email" name="email" />
        <FormHorizontal>
          <div>
            <Input label="IDADE" type="number" name="age" />
          </div>
          <div>
            <Input label="PESO(em kg)" type="number" step="any" name="weight" />
          </div>
          <div>
            <Input label="ALTURA" type="number" step="any" name="height" />
          </div>
        </FormHorizontal>
      </Form>
    </Container>
  );
}
