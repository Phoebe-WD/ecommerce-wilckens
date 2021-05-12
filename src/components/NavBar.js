import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

export default function NavBar(){
    return(
    <div className="NavBar">

    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/"> Menú </a></li>
          <li><a href="/"> Nosotros </a></li>
          <li><a href="/"> Tiendas </a></li>
          <li><a href="/"> Contacto </a></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
    </div>
    );
}