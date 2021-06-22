import React from "react";
import { useCart } from "../Context/CartContext";
import "./Cart.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

export default function Cart() {
  const carrito = useCart();
  const cart = carrito.isCart.addedItem;
  const total = carrito.isCart.totalPrice;

  return (
    <div className="Cart">
      <h2>Carrito</h2>
      {cart?.map((items) => {
        return (
          <div className="carritoInfo">
            <table>
              <tr>
                <th>Nombre producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
                <th>Total</th>
              </tr>
              <td>
                <p key={items.id}>{items.name}</p>
              </td>
              <td>
                <p key={items.id}>${items.precio}</p>
              </td>
              <td>
                <p key={items.id}>{items.quantity}</p>
              </td>
              <td>
                <button onClick={() => carrito.deleteItem(items)}>
                  <DeleteIcon />
                </button>
              </td>
              <td>
                <p>${items.precio * items.quantity}</p>
              </td>
            </table>
          </div>
        );
      })}
      <div className="precioTotal">Total: ${total > 0 ? total : 0}</div>
      <Link to="/finalizarcompra">
        <button>Finalizar Compra</button>
      </Link>
      <button onClick={carrito.clear}>Limpiar Carrito</button>
    </div>
  );
}
