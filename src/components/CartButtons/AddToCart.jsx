import React from "react";
import "./Buttons.css";

export default function AddToCart({ handle }) {
  return (
    <div className="AddToCart">
      <button onClick={handle}>Agregar al Carro</button>
    </div>
  );
}
