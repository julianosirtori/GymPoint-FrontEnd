import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import Select from 'react-select';
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

const styles = {
  input: styles => ({
    padding: '10px 15px',
  }),
};

export default function NewRegistration() {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function findStudents() {
      try {
        const response = await api.get('/students');
        const data = response.data.map(student => {
          return { value: student.id, label: student.name, ...student };
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
          return { value: plan.id, label: plan.title, ...plan };
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

  function handleStartDate(event) {
    event.target.type = 'date';
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
          <FormHorizontal>
            <ItemForm>
              <label htmlFor="student">ALUNO</label>
              <Select
                name="student_id"
                placeholder="Buscar aluno"
                options={students}
                styles={styles}
              />
            </ItemForm>
          </FormHorizontal>
          <FormHorizontal>
            <ItemForm>
              <label htmlFor="plans">PLANO</label>
              <Select
                name="plan_id"
                id="plans"
                placeholder="Selecione o plano"
                options={plans}
                styles={styles}
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="DATA DE INÍCIO"
                type="text"
                onFocus={handleStartDate}
                placeholder="Escolha a data"
                name="start_date"
                required
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="DATA DE TÉRMINO"
                type="text"
                disabled
                name="final_date"
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="VALOR FINAL"
                type="number"
                disabled
                name="final_price"
              />
            </ItemForm>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
