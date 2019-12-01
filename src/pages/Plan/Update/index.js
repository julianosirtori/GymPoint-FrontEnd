import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  Header,
  ActionHeader,
  FormHorizontal,
  ContainerForm,
} from '~/styles/pageForm';

export default function UpdateUpdate({ history }) {
  const [plan, setPLan] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    async function findPlan() {
      const { state } = history.location;
      const { idPlan } = state;
      console.tron.log(state);
      try {
        const response = await api.get(`/plans/${idPlan}`);
        setPLan(response.data);
      } catch (err) {
        toast.error('Ocorreu um erro ao buscar o plano');
      }

      setId(idPlan);
    }
    findPlan();
  }, [history.location]);

  async function handleSubmit(data) {
    try {
      await api.put(`/plans/${id}`, data);
      toast.success('Plano foi Editado com sucesso');
      history.push('/plan');
    } catch (err) {
      toast.error('Falha ao editar o plano');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={plan}>
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

UpdateUpdate.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({ idPlan: PropTypes.number }),
    }).isRequired,
    push: PropTypes.func,
  }).isRequired,
};
