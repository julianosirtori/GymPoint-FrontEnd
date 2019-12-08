import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idPlanCurrent, setIdPlanCurrent] = useState(0);

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

  useEffect(() => {
    findPlans();
  }, []);

  function handleButtonEdit(idPlan) {
    history.push('/plan/update', { idPlan });
  }

  function handleButtonDelete(idPlan) {
    setModalIsOpen(true);
    setIdPlanCurrent(idPlan);
  }

  async function handleButtonOkModal() {
    setModalIsOpen(false);
    try {
      await api.delete(`/plans/${idPlanCurrent}`);
      toast.success('Plano Apagado com sucesso');
      await findPlans();
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
  }

  function handleButtonCancelModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Request Delete Plan"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="OverlayModal"
      >
        <h1>Tem certeza que deseja apagar o Plano ?</h1>
        <div>
          <button type="button" onClick={handleButtonOkModal}>
            SIM
          </button>
          <button type="button" onClick={handleButtonCancelModal}>
            NÃO
          </button>
        </div>
      </Modal>

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
