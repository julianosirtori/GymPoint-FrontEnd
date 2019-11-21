import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    max-width: 195px;
    width: 100%;
    height: 24px;
    padding: 0 30px;
    margin-right: 30px;
    border-right: 1px solid #dddddd;
  }

  ul {
    list-style: none;

    li {
      float: left;
      margin-right: 21px;
      a {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => (props.active ? '#000000' : '#999999')};
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 30px;

  span {
    color: #666666;
    font-size: 14px;
    text-align: left;
    font-weight: bold;
  }

  button {
    color: #de3b3b;
    font-size: 14px;
    background: none;
    border: none;
  }
`;
