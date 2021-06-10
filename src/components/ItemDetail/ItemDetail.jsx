import React, { useState } from "react";
import Purchase from "../CartButtons/Purchase";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

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
  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const handleClick = () => {
    setCart(true);
  };

  console.log("cate:", categoria);
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
          <p className="precio">{price}</p>
          {cart ? (
            <Purchase />
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={handleCantidad}
              handle={handleClick}
            />
          )}
        </div>
        <h4>Cantidad que añadirás al carro {cantidad}</h4>
      </div>
    </div>
  );
}
