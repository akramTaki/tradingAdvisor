import styled from "styled-components";

export const Header = styled.h1`
  color: #3a506b;
  text-shadow: 0 3px 10px rgb(255 255 255 / 30%);
  text-align: center;
  font-size: 30px;
  margin: 60px auto;
`;

export const LoginForm = styled.form`
  width: calc(100vw - 200px);
  max-width: 1000px;
  height: 530px;
  padding: 20px 30px;
  margin: auto;
  margin-top: calc((100vh / 2) - 260px);
  background: #efefef;
  border: 1px solid #3a506b;
  border-radius: 10px;
  box-shadow: 0 0 50px #3a506b;

  left: 100px;

  .loginContainer {
    height: 410px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }

  .loginForm {
    padding: 75px 50px;
    height: 440px;
    border-radius: 5px;
    background: #3a506b;
    color: #fff;

    input {
      padding: 12px;
      width: 350px;
    }

    label {
      margin-bottom: 10px;
    }
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-left: 25px;
    margin-top: 100px;
  }

  h1 {
    padding: 15px;
    text-align: justify;
    font-size: 20px;
  }
`;

export const InputGroup = styled.div`
  padding: 15px 20px;
  margin-bottom: 10px;

  label {
    font-size: 18px;
    width: 120px;
    display: inline-block;
  }

  input {
    width: 270px;
    border: none;
    padding: 5px;
    border-radius: 3px;
    color: #000;
  }
`;

export const SubmitButton = styled.div`
  margin: 35px auto;
  text-align: center;

  button {
    padding: 0 25px;
    height: 45px;
    color: #000;
    box-shadow: none;
    font-size: 16px;
    cursor: pointer;
  }
`;
