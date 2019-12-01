import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

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

export default function Registration() {
  const [registrations, setRegistrations] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idRegistrationCurrent, setIdRegistrationCurrent] = useState(0);

  async function findRegistrations() {
    try {
      const response = await api.get('/registrations');
      const { data } = response;
      setRegistrations(data);
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
  }

  useEffect(() => {
    findRegistrations();
  }, []);

  function handleButtonEdit(idRegistration) {
    history.push('/registration/update', { idRegistration });
  }

  function handleButtonDelete(idRegistration) {
    setModalIsOpen(true);
    setIdRegistrationCurrent(idRegistration);
  }

  async function handleButtonOkModal() {
    setModalIsOpen(false);
    try {
      await api.delete(`/registrations/${idRegistrationCurrent}`);
      toast.success('Matricula apagada com sucesso');
      await findRegistrations();
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
        contentLabel="Request Delete Registration"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="OverlayModal"
      >
        <h1>Tem certeza que deseja apagar a Matrícula ?</h1>
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
        <h1>Gerenciando matrículas</h1>
        <ActionHeader>
          <Link to="/registration/new">
            <MdAdd size={20} color="#FFFFFF" />
            CADASTRAR
          </Link>
        </ActionHeader>
      </Header>
      <ContentTable>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <ButtonEdit
                    onClick={() => {
                      handleButtonEdit(student.id);
                    }}
                    type="button"
                  >
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    onClick={() => {
                      handleButtonDelete(student.id);
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
