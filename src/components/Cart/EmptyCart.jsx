import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="EmptyCart">
      <h2>El carrito esta vacío</h2>
      <SentimentVeryDissatisfiedIcon />

      <Link to="/">
        <button>Volver a la Tienda</button>
      </Link>
    </div>
  );
}
