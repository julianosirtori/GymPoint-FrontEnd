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
    max-width: 450px;
    width: 100%;
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

    strong{
      color: #444444;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    p{
      color: #666666;
      font-size: 16px;
      text-align: left;
      min-height: 100px;
      margin-bottom: 22px;
      line-height: 26px;
    }

    form{
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      width: 100%;

      textarea{
        width: 100%;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        padding: 13px 15px;
        font-size: 16px;
        color: #999999;
        min-height: 127px;
        margin-bottom: 21px;
      }

      button{
        width: 100%;
        height: 45px;
        background: #EE4D64;
        color: white;
        border: none;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        border-radius: 4px;
      }
    }

    .alert-actions{
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
