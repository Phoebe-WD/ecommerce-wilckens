import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./ItemCount.css";
import AddToCart from "../CartButtons/AddToCart";

export default function ItemCount({ stock, initial, onAdd, handle }) {
  const [contador, setContador] = useState(initial);

  const addCounter = () => {
    if (contador < stock) {
      setContador((contador) => {
        let count = contador + 1;
        onAdd(count);
        return count;
      });
    }
  };

  const minCounter = () => {
    if (contador > 1) {
      setContador((contador) => {
        let count = contador - 1;
        onAdd(count);
        return count;
      });
    }
  };

  return (
    <div className="ItemCount">
      <div className="Contador">
        <button onClick={minCounter}>
          <RemoveCircleIcon style={{ color: "lightseagreen" }} />
        </button>
        <p>{contador}</p>
        <button onClick={addCounter}>
          <AddCircleIcon style={{ color: "lightseagreen" }} />
        </button>
      </div>
      <AddToCart handle={handle} />
    </div>
  );
}
