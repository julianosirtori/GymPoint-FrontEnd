import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 4px;
  padding: 30px 30px 0 30px;
  margin-top: 20px;
  font-size: 16px;

  table {
    border-collapse: collapse;
    width: 100%;
    th {
      text-align: left;
      font-weight: bold;
      color: #444444;
    }

    tbody {
      tr {
        td {
          padding: 16px 0;
          color: #666666;
        }
        & + tr {
          border-top: 1px solid #eeeeee;
        }
      }
    }
    .end {
      text-align: end;
    }
  }
`;
