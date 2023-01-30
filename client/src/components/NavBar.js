import React, { useState } from "react";
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
        <Nav className="nav">
          <div className="nav2">
          <Button>
            <Link to="/" className="logo">
            <img src="../images/logo.png" alt="logo" width={116} height={116} className="rounded-corners"/>
            </Link>
          </Button>
          <Button as={Link} to="/about">
            About
          </Button>
          <Button as={Link} to="/contact">
            Contact
          </Button>
          <Button as={Link} to="/login">
            Login/Signup
          </Button>
          </div>
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


const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;


export default NavBar;
