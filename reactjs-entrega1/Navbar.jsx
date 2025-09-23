import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>🍽️ RestoApp</h2>
        </div>
        
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#categorias">Categorías</a>
          <a href="#contacto">Contacto</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        
        <div className="navbar-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

