import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

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
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function findStudents() {
      try {
        const response = await api.get('/students', { params: { search } });
        const { data } = response;
        setStudents(data);
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
    findStudents();
    // eslint-disable-next-line
  }, [search]);

  function handleInputSearch(event) {
    const { value } = event.target;
    setSearch(value);
  }

  function handleButtonEdit(idStudent) {
    history.push('/student/update', { idStudent });
  }

  async function handleButtonDelete(idStudent) {
    const answer = window.confirm('Tem certeza que deseja apagar este aluno ?');
    if (answer) {
      try {
        await api.delete(`/students/${idStudent}`);
        setStudents(students.filter(student => student.id !== idStudent));
        toast.success('Aluno Apagado com sucesso');
      } catch (err) {
        toast.error('Ocorreu um erro');
      }
    }
  }

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
            <input
              name="query"
              value={search}
              onChange={handleInputSearch}
              placeholder="Buscar Aluno"
            />
          </Search>
        </ActionHeader>
      </Header>
      <ContentTable>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-EMAIL</th>
              <th className="center">IDADE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td className="center">{student.age}</td>
                <td className="end">
                  <ButtonEdit
                    onClick={() => {
                      handleButtonEdit(student.id);
                    }}
                    type="button"
                  >
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    onClick={() => {
                      handleButtonDelete(student.id);
                    }}
                    type="button"
                  >
                    apagar
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentTable>
    </Container>
  );
}
