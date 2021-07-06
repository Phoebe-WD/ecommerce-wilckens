import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase";
import Swal from "sweetalert2";

export default function ItemListContainer() {
  const [curso, setCurso] = useState(null);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();
  useEffect(() => {
    setLoader(true);
    const getItems = getFirestore();
    const itemCollection = getItems.collection("Items");
    const filtro = catId
      ? itemCollection.where("categoryId", "==", catId)
      : itemCollection;
    filtro
      .get()
      .then((res) => {
        if (res.size === 0) {
          Swal.fire({
            title: "Ups!",
            text: "No se encontraron productos en esta categoría!",
            icon: "error",
            confirmButtonColor: "lightseagreen",
            showCloseButton: true,
          });
        }
        setCurso(
          res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoader(false));
  }, [catId]);
  console.log(curso);
  return (
    <div className="ItemListContainer">
      <h2>Nuestros Cursos</h2>
      {loader ? (
        <CircularProgress />
      ) : curso && curso.length > 0 ? (
        <ItemList categoryId={catId} items={curso} />
      ) : (
        <h3>No se encontraron items para esta categoria</h3>
      )}
    </div>
  );
}
