import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '~/services/history';
import logo from '~/assets/logo-header.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Nav, Aside, StyledLink } from './styles';

export default function Header() {
  const { pathname } = history.location;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Nav>
        <img src={logo} alt="Gympoint" />
        <ul>
          <li>
            <StyledLink
              active={pathname.includes('student') ? 1 : 0}
              to="/student"
            >
              ALUNOS
            </StyledLink>
          </li>
          <li>
            <StyledLink active={pathname.includes('plan') ? 1 : 0} to="/plan">
              PLANOS
            </StyledLink>
          </li>
          <li>
            <StyledLink
              active={pathname.includes('registration') ? 1 : 0}
              to="/registration"
            >
              MATRÍCULAS
            </StyledLink>
          </li>
          <li>
            <StyledLink
              active={pathname.includes('questions') ? 1 : 0}
              to="/questions"
            >
              PEDIDOS DE AUXÍLIO
            </StyledLink>
          </li>
        </ul>
      </Nav>
      <Aside>
        <span>{user.name}</span>
        <button type="button" onClick={logout}>
          sair do sistema
        </button>
      </Aside>
    </Container>
  );
}
