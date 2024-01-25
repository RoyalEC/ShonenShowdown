import React from "react";

function Header() {
  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">Shonen Showdown</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html" className="logo">
          <img src="/transparentlogo.png" alt="" className="img-fluid" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
