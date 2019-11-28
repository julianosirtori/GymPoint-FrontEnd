import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Header,
  ActionHeader,
  FormHorizontal,
  ContainerForm,
} from '~/styles/pageForm';

export default function NewStudent() {
  async function handleSubmit(data) {
    try {
      await api.post('/students', data);
      toast.success('Aluno salvo com sucesso');
      history.push('/student');
    } catch (err) {
      toast.error('Falha ao salvar aluno');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Gerenciando alunos</h1>
          <ActionHeader>
            <Link to="/student">
              <MdChevronLeft size={20} color="#FFFFFF" />
              VOLTAR
            </Link>
            <button type="submit">
              <MdCheck size={20} color="#FFFFFF" />
              SALVAR
            </button>
          </ActionHeader>
        </Header>

        <ContainerForm>
          <Input label="NOME COMPLETO" type="text" name="name" required />
          <Input label="ENDEREÇO DE EMAIL" type="email" name="email" required />
          <FormHorizontal>
            <div>
              <Input label="IDADE" type="number" name="age" required />
            </div>
            <div>
              <Input
                label="PESO(em kg)"
                type="number"
                step="any"
                name="weight"
                required
              />
            </div>
            <div>
              <Input
                label="ALTURA"
                type="number"
                step="any"
                name="height"
                required
              />
            </div>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
