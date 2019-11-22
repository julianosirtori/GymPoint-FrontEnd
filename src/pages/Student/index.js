import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import {
  Container,
  Header,
  ActionHeader,
  Search,
  ContentTable,
  ButtonEdit,
  ButtonDelete,
} from './styles';

export default function Student() {
  return (
    <Container>
      <Header>
        <h1>Gerenciando alunos</h1>
        <ActionHeader>
          <Link to="student/new">
            <MdAdd size={20} color="#FFFFFF" />
            CADASTRAR
          </Link>
          <Search>
            <MdSearch size={20} color="#999999" />
            <input name="query" placeholder="Buscar Aluno" />
          </Search>
        </ActionHeader>
      </Header>
      <ContentTable>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-EMAIL</th>
              <th>IDADE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juliano Sirtori</td>
              <td>julianosirtori@gmail.com</td>
              <td>20</td>
              <td>
                <ButtonEdit type="button">editar</ButtonEdit>
                <ButtonDelete type="button">apagar</ButtonDelete>
              </td>
            </tr>
            <tr>
              <td>Juliano Sirtori</td>
              <td>julianosirtori@gmail.com</td>
              <td>20</td>
              <td>
                <ButtonEdit type="button">editar</ButtonEdit>
                <ButtonDelete type="button">apagar</ButtonDelete>
              </td>
            </tr>
            <tr>
              <td>Juliano Sirtori</td>
              <td>julianosirtori@gmail.com</td>
              <td>20</td>
              <td>
                <ButtonEdit type="button">editar</ButtonEdit>
                <ButtonDelete type="button">apagar</ButtonDelete>
              </td>
            </tr>
            <tr>
              <td>Juliano Sirtori</td>
              <td>julianosirtori@gmail.com</td>
              <td>20</td>
              <td>
                <ButtonEdit type="button">editar</ButtonEdit>
                <ButtonDelete type="button">apagar</ButtonDelete>
              </td>
            </tr>
          </tbody>
        </table>
      </ContentTable>
    </Container>
  );
}
