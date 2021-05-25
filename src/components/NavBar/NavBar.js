import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar(){
    return(
    <div className="NavBar">
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/"> Home </a></li>
          <li><a href="/"> Productos </a></li>
          <li><a href="/"> Tiendas </a></li>
          <li><a href="/"> Contacto </a></li>
        </ul>
      <CartWidget/>
      </nav>
    </header>
    </div>
    );
}