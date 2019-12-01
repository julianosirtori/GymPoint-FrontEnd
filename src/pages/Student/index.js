import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idStudentCurrent, setIdStudentCurrent] = useState(0);
  const [search, setSearch] = useState('');

  async function findStudents() {
    try {
      const response = await api.get('/students', { params: { search } });
      const { data } = response;
      setStudents(data);
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
  }

  useEffect(() => {
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

  function handleButtonDelete(idStudent) {
    setModalIsOpen(true);
    setIdStudentCurrent(idStudent);
  }

  async function handleButtonOkModal() {
    setModalIsOpen(false);
    try {
      await api.delete(`/students/${idStudentCurrent}`);
      toast.success('Aluno Apagado com sucesso');
      await findStudents();
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
  }

  function handleButtonCancelModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Request Delete User"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="OverlayModal"
      >
        <h1>Tem certeza que deseja apagar o Aluno ?</h1>
        <div>
          <button type="button" onClick={handleButtonOkModal}>
            SIM
          </button>
          <button type="button" onClick={handleButtonCancelModal}>
            NÃO
          </button>
        </div>
      </Modal>

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
