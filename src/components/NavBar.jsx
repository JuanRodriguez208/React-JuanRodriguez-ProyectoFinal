import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img src="/src/assets/brownie-logo.png" alt="Logo de la empresa" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/brownies-especiales">Brownies Especiales</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

