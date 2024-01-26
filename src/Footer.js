import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer"></footer>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <li>
            <a href="/how-to-play">How to Play</a>
          </li>
          <li>
            <a href="/get-started">Get Started</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <p>&copy;{new Date().getFullYear()}</p>
        </nav>
      </div>
    </>
  );
}

export default Footer;
