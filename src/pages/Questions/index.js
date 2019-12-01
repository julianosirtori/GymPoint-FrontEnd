import React from 'react';

import { Container, Header, ButtonEdit } from '~/styles/pageTable';
import { Content } from './styles';

export default function Questions() {
  return (
    <Container>
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
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>
                <ButtonEdit type="button">responder</ButtonEdit>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>
                <ButtonEdit type="button">responder</ButtonEdit>
              </td>
            </tr>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>
                <ButtonEdit type="button">responder</ButtonEdit>
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
