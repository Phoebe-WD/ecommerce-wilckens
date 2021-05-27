import React from "react";
import './Item.css';


export default function Item({ id, name, description, img, precio, stock }){

    return(
<div className="Item">
    <div className="ItemProduct">
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="precio">{precio}</p>
    </div>
</div>
    )
}