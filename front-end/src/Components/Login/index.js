import { useState } from "react";
import { Header, LoginForm, InputGroup, SubmitButton } from "./style";

import { Button, Form } from "antd";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e?.stopPropagation();
    e?.preventDefault();

    login();
  };
 
  const login = () => {
    setLoading(true);
  };

  return (
    <div style={{ borderTop: "1px solid transparent" }}>
      <LoginForm style={{ marginTop: props.popup ? 0 : undefined }}>
        <div className="loginContainer">
          <div className="banner"> 
            <Header>
              <img width="400" src="https://camo.githubusercontent.com/d1f67a3daf9effca4c514fe68137e58cf0e18f19f4919ce1f0112cc1abaa7053/68747470733a2f2f696d672e74687266756e2e636f6d2f696d672f3134362f3331392f686f7573655f63616b655f78322e6a7067" />
            </Header>
          </div>

          <Form onFinish={handleSubmit} className="loginForm">
            <InputGroup>
              <label>Username</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <SubmitButton>
              <Button
                htmlType="submit"
                loading={loading}
                onClick={handleSubmit}
              >
                {/** Fake login */}
                <Link to="/dashboard">Login</Link>
              </Button>
            </SubmitButton>
          </Form>
        </div>
        <span
          style={{
            clear: "both",
            display: "block",
            textAlign: "center",
            paddingTop: 20,
          }}
        ></span>
      </LoginForm>
    </div>
  );
};

export default LoginPage;
