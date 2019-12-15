import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { formatPrice, formatMonthDuration } from '~/util/format';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Header,
  ActionHeader,
  ContentTable,
  ButtonEdit,
  ButtonDelete,
} from '~/styles/pageTable';

export default function Plan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function findPlans() {
      try {
        const response = await api.get('/plans');
        const data = response.data.map(plan => ({
          ...plan,
          priceFormatted: formatPrice(plan.price),
          durationFormatted: formatMonthDuration(plan.duration),
        }));

        setPlans(data);
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
    findPlans();
  }, []);

  function handleButtonEdit(idPlan) {
    history.push('/plan/update', { idPlan });
  }

  async function handleButtonDelete(idPlan) {
    const answer = window.confirm('Tem certeza que deseja apagar este plano ?');
    if (answer) {
      try {
        await api.delete(`/plans/${idPlan}`);
        toast.success('Plano Apagado com sucesso');
        setPlans(plans.filter(plan => plan.id !== idPlan));
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciando planos</h1>
        <ActionHeader>
          <Link to="plan/new">
            <MdAdd size={20} color="#FFFFFF" />
            CADASTRAR
          </Link>
        </ActionHeader>
      </Header>
      <ContentTable>
        <table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th className="center">DURAÇÃO</th>
              <th className="center">VALOR p/MÊS</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td className="center">{plan.durationFormatted}</td>
                <td className="center">{plan.priceFormatted}</td>
                <td className="end">
                  <ButtonEdit
                    onClick={() => {
                      handleButtonEdit(plan.id);
                    }}
                    type="button"
                  >
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    onClick={() => {
                      handleButtonDelete(plan.id);
                    }}
                    type="button"
                  >
                    apagar
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentTable>
    </Container>
  );
}
