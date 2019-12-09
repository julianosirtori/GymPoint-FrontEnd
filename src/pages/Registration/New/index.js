import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, addMonths } from 'date-fns';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

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
  input: () => ({
    padding: '10px 15px',
  }),
};

export default function NewRegistration() {
  const [planSelected, setPlanSelected] = useState({ duration: 0 });
  const [studentSelected, setStudentSelected] = useState({});
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endPrice, setEndPrice] = useState('');

  useEffect(() => {
    setEndPrice(`R$ ${planSelected.duration * planSelected.price}`);
    setEndDate(
      format(addMonths(startDate, planSelected.duration), 'dd/MM/yyyy')
    );
  }, [planSelected, startDate]);

  async function loadStudents() {
    try {
      const response = await api.get('/students');
      return response.data.map(student => {
        return { value: student.id, label: student.name, ...student };
      });
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
    return [];
  }

  async function loadPlans() {
    try {
      const response = await api.get('/plans');
      return response.data.map(plan => {
        return { value: plan.id, label: plan.title, ...plan };
      });
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
    return [];
  }

  async function handleSubmit() {
    try {
      await api.post('/registrations', {
        plan_id: planSelected.id,
        start_date: startDate,
        student_id: studentSelected.id,
      });
      toast.success('Matrícula Cadastrada com sucesso');
      history.push('/registration');
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
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
              <AsyncSelect
                cacheOptions
                defaultOptions
                name="student_id"
                onChange={value => {
                  setStudentSelected(value);
                }}
                placeholder="Buscar aluno"
                loadOptions={loadStudents}
                styles={styles}
              />
            </ItemForm>
          </FormHorizontal>
          <FormHorizontal>
            <ItemForm>
              <label htmlFor="plans">PLANO</label>
              <AsyncSelect
                cacheOptions
                defaultOptions
                name="plan_id"
                placeholder="Selecione o plano"
                loadOptions={loadPlans}
                onChange={value => {
                  setPlanSelected(value);
                }}
                styles={styles}
              />
            </ItemForm>
            <ItemForm>
              <label>DATA DE INÍCIO</label>
              <DatePicker
                onChange={value => {
                  setStartDate(value);
                }}
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                name="start_date"
                placeholderText="Escolha a data"
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="DATA DE TÉRMINO"
                type="text"
                disabled
                value={endDate}
                name="endDate"
              />
            </ItemForm>
            <ItemForm>
              <Input
                label="VALOR FINAL"
                type="text"
                disabled
                value={endPrice}
                name="endPrice"
              />
            </ItemForm>
          </FormHorizontal>
        </ContainerForm>
      </Form>
    </Container>
  );
}
