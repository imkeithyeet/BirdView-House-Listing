import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";


function NavBar() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Birdview</Link>
      </Logo>
      <Nav>
      <Button as={Link} to="/about">
          About
        </Button>
        <Button as={Link} to="/contact">
          Contact
        </Button>
        <Button as={Link} to="/login">
          Login/Signup
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: black;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
