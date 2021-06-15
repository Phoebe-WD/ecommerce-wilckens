import React from "react";
import { useCart } from "../Context/CartContext";
import "./Cart.css";

export default function Cart({ product }) {
  const carrito = useCart();
  return (
    <div className="Cart">
      <h2>Carrito</h2>

      <button onClick={carrito.clear}>Limpiar Carrito</button>
    </div>
  );
}
