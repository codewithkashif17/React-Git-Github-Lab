import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="#home">ChronoX</a>
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="nav-btn">
          <a href="#download" className="btn">
            Download App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
