import React, { useState } from "react";
import Purchase from "../CartButtons/Purchase";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCart } from "../Context/CartContext";
import Swal from "sweetalert2";

export default function ItemDetail({
  id,
  name,
  description,
  img,
  price,
  stock,
  categoria,
  descriptionLarga,
}) {
  const [cart, setCart] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const carrito = useCart();
  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const addNewItem = () => {
    setCart(true);
    carrito.addItem({
      id: id,
      name: name,
      precio: price,
      quantity: cantidad,
    });
    Swal.fire({
      title: "Gracias!",
      text: "Su producto ha sido añadido con éxito",
      icon: "success",
      confirmButtonColor: "lightseagreen",
      showCloseButton: true,
    });
  };

  return (
    <div className="ItemDetail">
      <div className="ItemsDetails">
        <div className="ItemImg">
          <img src={img} alt={name} />
        </div>
        <div className="ItemInfo">
          <h2>{name}</h2>
          <p>
            <strong>Descripción: </strong>
            {descriptionLarga}
          </p>
          <p className="precio">${price}</p>
          {cart ? (
            <Purchase />
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={handleCantidad}
              handle={addNewItem}
            />
          )}
        </div>
        <h4>Cantidad que añadirás al carro {cantidad}</h4>
      </div>
    </div>
  );
}
