import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";


export default function ItemList( { id, name, description, stock, img, price } ) {


    return ( 
        <div className="ItemList">
            <Item key={id} id={id} name={name} description={description} stock={stock} img={img} precio={price}/>
        </div>
            );
}