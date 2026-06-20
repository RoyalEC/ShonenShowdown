import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header
        id="header"
        className={`${styles.fixedTop} ${styles.headerInnerPages}`}
      >
        <Container
          className={styles.dFlexAlignItemsCenterJustifyContentBetween}
        >
          <Navbar.Brand href="/">
            <img
              src="/transparentlogo.png"
              alt=""
              className={`${styles.imgFluid} ${styles.logo}`}
            />
          </Navbar.Brand>
          <Navbar
            className={`${styles.navbarCustom}`}
            bg=""
            data-bs-theme="dark"
          >
            <Nav.Link href="how-to-play">
              <Button variant="outline-info" className={styles.navButton}>
                How To Play
              </Button>
            </Nav.Link>
            <Nav className={styles.mrAuto}>
              <Nav.Link href="/get-started">
                <Button variant="outline-light" className={styles.navButton}>
                  Get Started
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;
