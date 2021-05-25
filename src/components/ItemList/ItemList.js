import React, { useState } from "react";
import Item from "../Item/Item";
import "./ItemList.css";


export default function ItemList() {
    const [curso, setCurso] = useState(null);
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

    return ( 
        <div className="ItemList">
{curso?.map((item) => {
                return(
                    <Item id={item.id} img={item.img} name={item.name} description={item.description} price={item.precio}>
                    {item.name}
                    </Item>
                 );

            })
        }
        </div>
            );
}