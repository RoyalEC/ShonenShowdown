import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <header id="header" className="fixed-top header-inner-pages">
        <Container className="d-flex align-items-center justify-content-between">
          {/* <Navbar.Brand href="index.html">Shonen Showdown</Navbar.Brand> */}
          {/* Uncomment below if you prefer to use an image logo */}
          <Navbar.Brand href="index.html">
            <img src="/transparentlogo.png" alt="" className="img-fluid" />
          </Navbar.Brand>
          <Navbar
            className="navbar-custom"
            bg="body-tertiary"
            data-bs-theme="dark"
          >
            <Nav className="mr-auto">
              <Nav.Link href="#about">Get Started</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;
