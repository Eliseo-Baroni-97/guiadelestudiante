import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">Guía Estudiantil</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="#">Guía del ingresante</Link></li>
        <li><Link to="#">Carreras</Link></li>
        <li><Link to="#">Horarios</Link></li>
        <li><Link to="#">Planes de estudio</Link></li>
        <li><Link to="#">FAQ</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
