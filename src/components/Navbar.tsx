
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Guía Estudiantil" height={36} />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="#">Guía del ingresante</Link></li>
        <li><Link to="#">Carreras</Link></li>
        <li><Link to="#">Horarios</Link></li>
        <li><Link to="#">Planes de estudio</Link></li>
        <li><Link to="/correlativas">Guía de correlativas</Link></li>
        <li><Link to="#">FAQ</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
