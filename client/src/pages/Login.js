import { useState} from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";
import "../styles/DarkMode.css";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <div className="LoginPage">
        <Logo>{ showLogin ? "Login into your BirdView Profile" : "Signup for your BirdView Profile" }
        </Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button variant="outline" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button variant="outline" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
      </div>
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Chunkfive", sans;
  font-size: 2rem;
  color: black;
  margin: 6px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
