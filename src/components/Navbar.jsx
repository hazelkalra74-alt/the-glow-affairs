// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // Tracks whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          The Glow Affairs
        </Link>

        {/* Hamburger button - only visible on mobile */}
        <button
          className={`navbar-hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="navbar-hamburger-line"></span>
          <span className="navbar-hamburger-line"></span>
          <span className="navbar-hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <nav
          id="primary-navigation"
          className={`navbar-nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>

          {/* Book Appointment CTA (also shown inside mobile menu) */}
          <Link
            to="/contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;