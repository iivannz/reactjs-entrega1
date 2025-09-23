import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo a la izquierda */}
        <div className="navbar-logo">
          <h2>🍽️ RestoApp</h2>
        </div>
        
        {/* Enlaces al centro */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#categorias">Categorías</a>
          <a href="#contacto">Contacto</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        
        {/* CartWidget a la derecha */}
        <div className="navbar-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

