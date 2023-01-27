import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import "../styles/NavBar.css";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 25) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navBar ? "navbar-active" : "navbar"}>
      <Wrapper>
        <Logo>
          <Link to="/" className="logo">
          <img src="../images/logo.png" alt="logo" width={116} height={116} className="rounded-corners"/>
          </Link>
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
    </nav>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: Chunkfive, sans;
  font-size: 3rem;
  color: CadetBlue;
  margin: 0;
  line-height: 1;
  text-shadow: 1px 1px 1px;
  display: inline-block;
  width: 100%;
  text-align: left;
   top: 70px;  
   left: 15%;
   border-radius: 50%;
  a {
    color: inherit;
    text-decoration: none;
    position: relative;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;


export default NavBar;
