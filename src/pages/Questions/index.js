import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, Header, ButtonEdit } from '~/styles/pageTable';
import { Content } from './styles';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [questionSelected, setQuestionSelected] = useState({});

  async function loadQuestions() {
    try {
      const { data } = await api.get('/help-orders');
      setQuestions(data);
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  function openModal(index) {
    setModalIsOpen(true);
    setQuestionSelected(questions[index]);
  }

  async function submitAnswer(data) {
    try {
      await api.post(`/help-orders/${questionSelected.id}/answer`, data);
      loadQuestions();
      toast.success('Pergunta Respondida');
    } catch (err) {
      toast.error('Ocorreu um erro');
    }
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Answer Student"
        ariaHideApp={false}
        className="Modal"
        shouldCloseOnEsc
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick
        overlayClassName="OverlayModal"
      >
        <strong>PERGUNTA DO ALUNO</strong>
        <p>{questionSelected.question}</p>
        <strong>SUA RESPOSTA</strong>
        <Form onSubmit={submitAnswer}>
          <Input multiline name="answer" placeholder="exemplo@email.com" />
          <button type="submit">Responder Aluno</button>
        </Form>
      </Modal>
      <Header>
        <h1>Pedidos de auxílio</h1>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={question.id}>
                <td>{question.student.name} </td>
                <td className="end">
                  <ButtonEdit type="button" onClick={() => openModal(index)}>
                    responder
                  </ButtonEdit>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
