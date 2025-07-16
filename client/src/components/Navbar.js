import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu burger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo / Titre */}
      <div className="navbar-logo">My App Azur Mern</div>

      {/* Bouton burger visible sur mobile */}
      <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? "burger-line open" : "burger-line"}></span>
        <span className={isOpen ? "burger-line open" : "burger-line"}></span>
        <span className={isOpen ? "burger-line open" : "burger-line"}></span>
      </button>

      {/* Menu liens */}
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><a href="/">Accueil</a></li>
        <li><a href="/shows">Séries</a></li>
        <li><a href="/about">À propos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
