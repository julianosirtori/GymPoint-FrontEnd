import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import producer from 'immer';
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
  ItemForm,
} from '~/styles/pageForm';

export default function NewPlan() {
  const [plan, setPlan] = useState({
    title: '',
    duration: 0,
    price: 0,
    priceTotal: 0,
  });

  useEffect(() => {
    setPlan(
      producer(plan, draft => {
        draft.priceTotal = plan.duration * plan.price;
      })
    );
  }, [plan]);

  function handleInput(event) {
    const { value, name } = event.target;
    setPlan({
      ...plan,
      [name]: value,
    });
  }

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
          <FormHorizontal>
            <ItemForm>
              <Input
                label="TÍTULO DO PLANO"
                value={plan.title}
                type="text"
                onChange={handleInput}
                name="title"
                required
              />
            </ItemForm>
          </FormHorizontal>
          <FormHorizontal>
            <ItemForm>
              <Input
                label="DURAÇÃO (em meses)"
                type="number"
                name="duration"
                onChange={handleInput}
                value={plan.duration}
                required
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="PREÇO MENSAL"
                type="number"
                step="any"
                onChange={handleInput}
                value={plan.price}
                name="price"
                required
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="PREÇO TOTAL"
                type="number"
                step="any"
                onChange={handleInput}
                value={plan.priceTotal}
                disabled
                name="priceTotal"
                required
              />
            </ItemForm>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
