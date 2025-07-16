import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Mon Application. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="/privacy">Politique de confidentialité</a>
        <a href="/terms">Conditions d’utilisation</a>
        {/* Liens externes ouvrant dans un nouvel onglet */}
        <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
