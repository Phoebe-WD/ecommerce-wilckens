import React from "react";
import './Item.css';
import {Link} from "react-router-dom";


export default function Item({ id, name, description, img, price, stock, categoria, descriptionLarga }){
    console.log(categoria);
    return(
<div className="Item">
    <div className="ItemProduct">
        <img src={img} alt={name}/>
        <Link to={`/producto/${id}`}><h2>{name}</h2></Link>
        <p>{description}</p>
        <p className="precio">{price}</p>
        <Link to={`/producto/${id}`}><button>Ver Producto</button></Link>
    </div>
</div>
    )
}