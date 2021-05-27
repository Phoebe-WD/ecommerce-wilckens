import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail( { item } ){
    const[cantidad, setCantidad] = useState(1);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad);
    }
    return(
        <div className="ItemDetail"> 
            <div className="ItemsDetails">
                <img src={item.img} alt={item.name}/>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="precio">{item.precio}</p>
                <ItemCount stock={5} initial={1} onAdd={handleCantidad}/>
            <div className="AddtoCart">
                <button>Agregar al Carro ({cantidad})</button>
            </div>
            </div>
        </div>
        )
}