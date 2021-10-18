import React from "react";
import "./Header.css";
import logo from "../../../Images/Logo/logo-sm.png";
import { NavHashLink } from "react-router-hash-link";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAll from "../../../hooks/useAll";

const Header = () => {
  const { firebase } = useAll();
  const { user, logOut } = firebase;

  const activeStyle = {
    color: "#07A5E2",
    fontWeight: 500,
  };
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavHashLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link activeStyle={activeStyle} as={NavHashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link
                activeStyle={activeStyle}
                as={NavHashLink}
                to="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link activeStyle={activeStyle} as={NavHashLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link
                activeStyle={activeStyle}
                as={NavHashLink}
                to="/contact"
              >
                Contact Us
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link>{user.displayName?.split(" ")[0]}</Nav.Link>
                  <button className="btn-signout nav-link" onClick={logOut}>
                    <i class="fas fa-sign-out-alt"></i> Sign Out
                  </button>
                </>
              ) : (
                <Nav.Link
                  activeStyle={activeStyle}
                  as={NavHashLink}
                  to="/form/signin"
                >
                  Sign In <i class="fas fa-sign-in-alt"></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
