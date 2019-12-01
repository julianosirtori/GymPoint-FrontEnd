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

export default function NewPlan() {
  async function handleSubmit(data) {
    try {
      await api.post('/plans', data);
      toast.success('Plano salvo com sucesso');
      history.push('/plan');
    } catch (err) {
      toast.error('Falha ao salvar plano');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de plano</h1>
          <ActionHeader>
            <Link to="/plan">
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
          <Input label="TÍTULO DO PLANO" type="text" name="title" required />
          <FormHorizontal>
            <div>
              <Input
                label="DURAÇÃO (em meses)"
                type="number"
                name="duration"
                required
              />
            </div>
            <div>
              <Input
                label="PREÇO MENSAL"
                type="number"
                step="any"
                name="price"
                required
              />
            </div>
            <div>
              <Input
                label="PREÇO TOTAL"
                type="number"
                step="any"
                disabled
                name="priceTotal"
                required
              />
            </div>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
