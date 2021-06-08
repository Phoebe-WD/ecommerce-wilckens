import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail( { id, name, description, img, price, stock, categoria, descriptionLarga } ){
    const[cantidad, setCantidad] = useState(1);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad);
    }
    console.log('cate:' , categoria);
    return(
        <div className="ItemDetail"> 
            <div className="ItemsDetails">
                <div className="ItemImg">
                    <img src={img} alt={name}/>
                </div>
                <div className="ItemInfo">
                    <h2>{name}</h2>
                    <p><strong>
                        Descripción:{' '}
                        </strong>
                        {descriptionLarga}</p>
                    <p className="precio">{price}</p>
                    <ItemCount stock={stock} initial={1} onAdd={handleCantidad}/>
                        <div className="AddToCart">
                        { cantidad <= 1 ? 
                        <Link to="/cart"><button>Agregar al Carro ({cantidad})</button> </Link>
                        :
                        <Link to="/cart"><button>Finalizar Compra</button> </Link>
                        }
                </div>
                </div>
            </div>
        </div> 
        )
}