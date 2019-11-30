import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.OverlayModal{
  position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.7);
}

.Modal {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    padding: 30px;
    top: 50%;
    color: #444444;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    div{
      margin-top: 16px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      button {
        margin-left: 8px;
        padding: 13px 16px;
        color: white;
        font-size: 16px;
        border:none;
        background: #4d85ee;

        & + button{
          background: #de3b3b;
        }
      }


    }
}

*:focus{
  outline: 0;
}

html, body, #root{
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
