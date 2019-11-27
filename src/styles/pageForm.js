import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 34px auto;

  form {
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    padding: 30px 30px 0 30px;
    margin-top: 20px;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    flex-grow: 1;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 7px;
    }

    input {
      color: #999999;
      font-size: 16px;
      padding: 13px 15px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }
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
`;

export const ButtonHeader = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background: ${props => (props.back ? '#cccccc' : '#ee4d64')};
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 16px;

  svg {
    margin-right: 16px;
  }
`;

export const FormHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    & + div {
      margin-left: 16px;
    }
  }
`;
