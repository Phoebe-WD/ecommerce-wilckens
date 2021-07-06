import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { getFirestore } from "../../firebase";

export default function FinalizarCompra() {
  const [order, setOrder] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
  const [correo, setCorreo] = useState("");
  const carrito = useCart();
  const cart = carrito.isCart.addedItem;
  const total = carrito.isCart.totalPrice;
  //   const cantidad = carrito.isCart.totalQuantity;
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumero = (e) => {
    setNumero(e.target.value);
  };
  const handleCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const updateOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const orderCollection = db.collection("orders");

    const newOrder = {
      buyer: {
        name: name,
        lastName: apellido,
        phone: numero,
        email: correo,
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
        <div>
          <h3>Tu número de orden es: {order}</h3>
          <h3>Tu Pedido</h3>
          {cart?.map((items) => {
            return (
              <div>
                <ul>
                  <li key={items.id}>
                    {items.quantity} x {items.name}
                  </li>
                </ul>
              </div>
            );
          })}
          <p>Le llegarán sus productos en un plazo de 5 días</p>
        </div>
      ) : (
        <div className="FormOrder">
          <form className="Form" onSubmit={updateOrder}>
            <input
              type="text"
              name="nombre"
              id="formNombre"
              value={name}
              onChange={handleName}
              placeholder="Ingresa tu nombre"
              required
            />
            <input
              type="text"
              name="apellido"
              id="formApellido"
              value={apellido}
              onChange={handleApellido}
              placeholder="Ingresa tu apellido"
              required
            />
            <input
              type="tel"
              name="telefono"
              id="formTelefono"
              value={numero}
              onChange={handleNumero}
              placeholder="Ingresa tu número"
              required
            />
            <input
              type="email"
              name="email"
              id="formEmail"
              value={correo}
              onChange={handleCorreo}
              placeholder="tucorreo@gmail.com"
              required
            />
            <button type="submit">Pagar</button>
          </form>
        </div>
      )}
    </div>
  );
}
