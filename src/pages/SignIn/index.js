import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="GymPoint" />
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          id="email"
          label="SEU E-MAIL"
          type="email"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          id="password"
          label="SUA SENHA"
          type="password"
          placeholder="*************"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </Container>
  );
}
