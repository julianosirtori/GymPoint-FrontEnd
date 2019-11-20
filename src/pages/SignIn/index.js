import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="GymPoint" />
      <Form>
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
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
