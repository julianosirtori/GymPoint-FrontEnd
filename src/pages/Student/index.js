import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  Container,
  Header,
  ActionHeader,
  Search,
  ContentTable,
  ButtonEdit,
  ButtonDelete,
} from '~/styles/pageTable';

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function findStudents() {
      try {
        const response = await api.get('/students');
        const { data } = response;
        setStudents(data);
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
    findStudents();
  }, []);

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
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <ButtonEdit type="button">editar</ButtonEdit>
                  <ButtonDelete type="button">apagar</ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentTable>
    </Container>
  );
}
