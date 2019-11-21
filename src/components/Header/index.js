import React from 'react';

import history from '~/services/history';
import logo from '~/assets/logo-header.svg';

import { Container, Nav, Aside, StyledLink } from './styles';

export default function Header() {
  const { pathname } = history.location;
  return (
    <Container>
      <Nav>
        <img src={logo} alt="Gympoint" />
        <ul>
          <li>
            <StyledLink active={pathname === '/student' ? 1 : 0} to="student">
              ALUNOS
            </StyledLink>
          </li>
          <li>
            <StyledLink active={pathname === '/plan' ? 1 : 0} to="plan">
              PLANOS
            </StyledLink>
          </li>
          <li>
            <StyledLink
              active={pathname === '/registration' ? 1 : 0}
              to="registration"
            >
              MATRÍCULAS
            </StyledLink>
          </li>
          <li>
            <StyledLink
              active={pathname === '/questions' ? 1 : 0}
              to="questions"
            >
              PEDIDOS DE AUXÍLIO
            </StyledLink>
          </li>
        </ul>
      </Nav>
      <Aside>
        <span>Juliano Sirtori</span>
        <button type="button">sair do sistema</button>
      </Aside>
    </Container>
  );
}
