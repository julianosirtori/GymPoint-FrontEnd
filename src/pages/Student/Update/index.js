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

export default function UpdateStudent({ history }) {
  const [student, setStudent] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    async function findUser() {
      const { state } = history.location;
      const { idStudent } = state;
      console.tron.log(state);
      try {
        const response = await api.get(`/students/${idStudent}`);
        console.tron.log(response);
        setStudent(response.data);
      } catch (err) {
        toast.error('Ocorreu um erro ao buscar o aluno');
      }

      setId(idStudent);
    }
    findUser();
  }, [history.location]);

  async function handleSubmit(data) {
    try {
      await api.put(`/students/${id}`, data);
      toast.success('Aluno foi Editado com sucesso');
      history.push('/student');
    } catch (err) {
      toast.error('Falha ao editar aluno');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={student}>
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

UpdateStudent.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({ idStudent: PropTypes.number }),
    }).isRequired,
    push: PropTypes.func,
  }).isRequired,
};
