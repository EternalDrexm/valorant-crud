import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Asegúrate de poner la ruta correcta del logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Valorant CRUD Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-agent">Crear Agente</Link></li>
        <li><Link to="/read-agents">Leer Agentes</Link></li>
        <li><Link to="/search-agent">Buscar Agente</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><Link to="/contact-us">Contáctanos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
