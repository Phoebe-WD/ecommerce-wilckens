import React from "react";
import { useCart } from "../Context/CartContext";
import Cart from "../Cart/Cart";
import EmptyCart from "../Cart/EmptyCart";

export default function CartContainer() {
  const carrito = useCart();
  const cantidadCarrito = carrito.isCart.totalQuantity;
  return (
    <div className="CartContainer">
      {cantidadCarrito === 0 ? <EmptyCart /> : <Cart />}
    </div>
  );
}
