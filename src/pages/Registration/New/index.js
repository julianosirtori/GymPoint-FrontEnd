import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Select, Form } from '@rocketseat/unform';
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

export default function NewRegistration() {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function findStudents() {
      try {
        const response = await api.get('/students');
        const data = response.data.map(student => {
          return { id: student.id, title: student.name, ...student };
        });
        setStudents(data);
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
    async function findPlans() {
      try {
        const response = await api.get('/plans');
        const data = response.data.map(plan => {
          return { id: plan.id, title: plan.title, ...plan };
        });
        setPlans(data);
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
    findPlans();
    findStudents();
  }, []);

  function handleSubmit() {
    history.push('/registration');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de matrícula</h1>
          <ActionHeader>
            <Link to="/registration">
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
          <Select
            name="student_id"
            label="ALUNO"
            placeholder="Buscar aluno"
            options={students}
          />
          <FormHorizontal>
            <div>
              <Select
                name="plan_id"
                label="PLANO"
                placeholder="Selecione o plano"
                options={plans}
              />
            </div>
            <div>
              <Input
                label="DATA DE INÍCIO"
                type="date"
                placeholder="Escolha a data"
                name="start_date"
                required
              />
            </div>
            <div>
              <Input
                label="DATA DE TÉRMINO"
                type="date"
                disabled
                name="final_date"
              />
            </div>
            <div>
              <Input
                label="VALOR FINAL"
                type="number"
                disabled
                name="final_price"
              />
            </div>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
