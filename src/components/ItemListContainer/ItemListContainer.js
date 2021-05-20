import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import '../ItemCount/ItemCount.css';

export default function ItemListContainer(){
    const[cantidad, setCantidad] = useState(1);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad);
    }

return(
    <>
    <h1 style={{ textAlign: 'center' }}>Bienvenido/a !</h1>
    <ItemCount stock={5} initial={1} onAdd={handleCantidad}/>
       <div className="AddtoCart">
            <button>Agregar al Carro ({cantidad})</button>
        </div>
</>
)
}