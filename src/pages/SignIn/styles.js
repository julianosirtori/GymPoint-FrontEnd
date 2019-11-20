import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  max-width: 360px;
  width: 100%;
  flex-direction: column;
  padding: 50px 30px;
  box-shadow: 0 0 10px #00000033;

  img {
    width: 100%;
    height: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;

    label {
      color: #444444;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 7px;
      margin-top: 20px;
    }

    input {
      width: 100%;
      font-size: Regular 16px Roboto;
      padding: 13px 15px;
      border: 1px solid #dddddd;
      border-radius: 4px;
    }

    button {
      width: 100%;
      height: 45px;
      border: none;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      background: #ee4d64;
      border-radius: 4px;
      margin-top: 15px;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
