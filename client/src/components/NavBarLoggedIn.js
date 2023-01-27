import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import "../styles/NavBar.css";

function NavBarLoggedIn({ user, setUser }) {
  const [navBar, setNavBar] = useState(false);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

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
          <Link to="/">BirdView</Link>
        </Logo>
          <Nav>
            <Button as={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button as={Link} to="/about">
              About
            </Button>
            <Button as={Link} to="/contact">
              Contact
            </Button>
            <Button variant="outline" onClick={handleLogoutClick}>
              Logout
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
  color: CadetBlue	;
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

export default NavBarLoggedIn;
