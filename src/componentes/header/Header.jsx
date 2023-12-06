import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logoSuperMami from "../../assets/logoSuperMami.png"
function Header() {
  return (
    <header className='header'>
      <img src={logoSuperMami} alt="Logo"/>
        <nav className='nav'>
          <ul>
            <li><Link to='/'>INICIO</Link></li>
            <li><Link to='/carrito'>CARRITO</Link></li>
            <li><Link to='/contacto'>CONTACTO</Link></li>
          </ul>
        </nav>
    </header>
  )
}
export default Header