import { useState, useEffect} from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";
import "../styles/DarkMode.css";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
    };
    useEffect(() => {
      document.body.className = theme;
        }, [theme]);
    
  return (
    <Wrapper>
      <Logo>{ showLogin ? "Login into your BirdView Profile" : "Signup for your BirdView Profile" }
      <button  className="buttonDark"onClick={toggleTheme}>🔆/🌙</button>

      </Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
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
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
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
