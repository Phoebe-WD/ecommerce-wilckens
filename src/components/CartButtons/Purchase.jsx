import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

export default function Purchase({ handle }) {
  return (
    <div className="Purchase">
      <Link to="/cart">
        <button onClick={handle}>Finalizar Compra</button>
      </Link>
    </div>
  );
}
