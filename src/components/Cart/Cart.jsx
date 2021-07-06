import React from "react";
import { useCart } from "../Context/CartContext";
import "./Cart.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

export default function Cart() {
  const carrito = useCart();
  const cart = carrito.isCart.addedItem;
  const total = carrito.isCart.totalPrice;

  const infoCart = cart?.map((items) => {
    return (
      <tr key={items.id}>
        <td>{items.name}</td>
        <td>${items.precio}</td>
        <td>{items.quantity}</td>
        <td>
          <button onClick={() => carrito.deleteItem(items)}>
            <DeleteIcon />
          </button>
        </td>
        <td>
          <p>${items.precio * items.quantity}</p>
        </td>
      </tr>
    );
  });

  return (
    <div className="Cart">
      <h2>Carrito</h2>

      <div className="carritoInfo">
        <table className="tablaCart">
          <tbody>
            <tr>
              <th>Nombre producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
              <th>Total</th>
            </tr>
            {infoCart}
          </tbody>
        </table>
      </div>

      <div className="precioTotal">Total: ${total > 0 ? total : 0}</div>
      <Link to="/finalizarcompra">
        <button>Finalizar Compra</button>
      </Link>
      <button onClick={carrito.clear}>Limpiar Carrito</button>
    </div>
  );
}
