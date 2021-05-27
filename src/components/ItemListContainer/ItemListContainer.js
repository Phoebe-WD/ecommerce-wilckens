import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer(){
    const [curso, setCurso] = useState(null);
   
    useEffect(() => {
    const myCursos = new Promise((resolve, reject) => {
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
            resolve(myProducto)
        }, 2000);
    });
    myCursos.then(result => {
        console.log(result)
        setCurso(result);
    });
    }, [])
    return ( 
        <div className="ItemListContainer">
{curso?.map((item) => {
                return(
                    <ItemList key={item.id} id={item.id} img={item.img} name={item.name} description={item.description} price={item.precio}/>
                 );
            })
        }
        </div>
            );
}