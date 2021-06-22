import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { getFirestore } from "../../firebase";

export default function FinalizarCompra() {
  const [order, setOrder] = useState("");
  const carrito = useCart();
  const cart = carrito.isCart.addedItem;
  const total = carrito.isCart.totalPrice;
  //   const cantidad = carrito.isCart.totalQuantity;
  const updateOrder = () => {
    const db = getFirestore();
    const orderCollection = db.collection("orders");
    const newOrder = {
      buyer: {
        name: "Jane Doe",
        phone: "+569999999",
        email: "janedoe@doe.com",
      },
      items: [{ cart }],
      total: total,
      date: new Date(),
    };
    orderCollection.add(newOrder).then(({ id }) => {
      setOrder(id);
      console.log(id);
      console.log(newOrder);
    });
  };
  return (
    <div className="FinalizarCompra">
      {order ? (
        <h3>Tu número de orden es: {order}</h3>
      ) : (
        <button onClick={updateOrder}>Crear número de orden</button>
      )}
    </div>
  );
}
