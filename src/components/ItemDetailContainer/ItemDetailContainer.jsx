import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase";
import Swal from "sweetalert2";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setLoader(true);
    const getItems = getFirestore();
    const itemCollection = getItems.collection("Items");
    const idProducto = productId;
    const item = itemCollection.doc(idProducto);
    item
      .get()
      .then((res) => {
        if (!res.exists) {
          Swal.fire({
            title: "Ups!",
            text: "No se encontraron productos!",
            icon: "error",
            confirmButtonColor: "lightseagreen",
            showCloseButton: true,
          });
        }
        setProduct([{ id: res.id, ...res.data() }]);
      })
      .catch((error) => {
        Swal.fire({
          title: "Ups!",
          text: "Error al buscar productos!",
          icon: "error",
          confirmButtonColor: "lightseagreen",
          showCloseButton: true,
        });
      })
      .finally(() => setLoader(false));
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loader ? (
        <CircularProgress />
      ) : (
        product?.map((item) => (
          <ItemDetail
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.precio}
            description={item.description}
            descriptionLarga={item.descriptionLarge}
            stock={item.stock}
            img={item.img}
            categoria={item.categoryId}
          />
        ))
      )}
    </div>
  );
}
