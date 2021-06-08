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
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/category/1"> HTML & CSS </Link>
            </li>
            <li>
              <Link to="/category/2"> Programación </Link>
            </li>
            <li>
              <Link to="/category/3"> Framework </Link>
            </li>
          </ul>
          <CartWidget />
        </nav>
      </header>
    </div>
  );
}
