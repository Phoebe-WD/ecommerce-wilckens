import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Inicio </Link>
            </li>
            <li>
              <Link to="#">Categorías</Link>
              <ul>
                <li>
                  <Link to="/category/htmlycss"> HTML & CSS </Link>
                </li>

                <li>
                  <Link to="/category/programacion"> Programación </Link>
                </li>
                <li>
                  <Link to="/category/frameworks"> Frameworks </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </nav>
      </header>
    </div>
  );
}
