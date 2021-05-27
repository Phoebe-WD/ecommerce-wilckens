import React, { useState , useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer(){
    const [product, setProduct] = useState({});
   
    useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
        let myProducto = [{
                id: 1,
                name: "HTML",
                description: "HyperText Markup Language",
                stock: 2,
                img: 'https://via.placeholder.com/150',
                precio: 20
            },
            {
                id: 2,
                name: "CSS",
                description: "Cascading Style Sheets",
                stock: 3,
                img: 'https://via.placeholder.com/150',
                precio: 30
            },
            {
                id: 3,
                name: "JavaScript",
                description: "Lenguaje de programación",
                stock: 5,
                img: 'https://via.placeholder.com/150',
                precio: 50
            },
            {
                id: 4,
                name: "React",
                description: "Librería de JavaScript",
                stock: 5,
                img: 'https://via.placeholder.com/150',
                precio: 70
            },
            {
                id: 5,
                name: "TypeScript",
                description: "Lenguaje de programación",
                stock: 5,
                img: 'https://via.placeholder.com/150',
                precio: 50
            },
            
        ];
        setTimeout(() => {
            resolve(myProducto[0])
        }, 2000);
    });
    getItems.then(value => {
        console.log(value)
        setProduct(value);
    });
    }, [])
    return (
        <div className="ItemDetailContainer">
        <h2 className="title" style={{textAlign: "center"}}>ITEM DETAIL DEMOSTRACIÓN</h2>
        <ItemDetail item={product}/>
        </div>
        )

}