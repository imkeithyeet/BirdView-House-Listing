import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import "../styles/NavBar.css";
import "../styles/NavBarLoggedIn.css";
import Footer from "../components/Footer";
import "../styles/Footer.css";


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
      <Wrapper className="Links">
          <Nav className="nav">
            <div className="nav2">
          <Button variant="outline">
            <Link to="/" className="logo">
            <img src="../images/logos.png" alt="logo" width={116} height={116} className="rounded-corners"/>
            </Link>
          </Button >
            <Button variant="outline" as={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button variant="outline" as={Link} to="/about">
              About
            </Button>
            <Button variant="outline" as={Link} to="/contact">
              Contact
            </Button>
            <Button variant="outline" onClick={handleLogoutClick}>
              Logout
            </Button>
            </div>
          </Nav>
      </Wrapper>
      <Footer />
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

export default NavBarLoggedIn;
