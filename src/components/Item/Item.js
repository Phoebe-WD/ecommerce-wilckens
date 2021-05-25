import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css';


export default function Item({ name, description, img, price }){
        const[cantidad, setCantidad] = useState(1);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad);
    }
    return(
<div className="Item">
    <div className="ItemProduct">
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="precio">{price}</p>
        <ItemCount stock={5} initial={1} onAdd={handleCantidad}/>
       <div className="AddtoCart">
            <button>Agregar al Carro ({cantidad})</button>
        </div>
    </div>
</div>
    )
}