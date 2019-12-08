import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 34px auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: #444444;
    font-weight: bold;
  }
`;

export const ActionHeader = styled.div`
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    background: #ee4d64;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 16px;
    margin-right: 16px;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Search = styled.div`
  background: #ffffff;
  font-size: 14px;
  height: 36px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 16px;

  input {
    margin-left: 16px;
    border: none;
    color: #999999;
    font-size: 14px;
  }
`;

export const ContentTable = styled.div`
  width: 100%;
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

    .center {
      text-align: center;
    }

    .end {
      text-align: end;
    }
  }
`;

export const ButtonEdit = styled.button`
  font-size: 15px;
  color: #4d85ee;
  background: none;
  border: none;
  margin-right: 24px;
`;

export const ButtonDelete = styled.button`
  font-size: 15px;
  color: #de3b3b;
  background: none;
  border: none;
`;
