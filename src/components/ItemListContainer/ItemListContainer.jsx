import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase";

export default function ItemListContainer() {
  const [curso, setCurso] = useState(null);
  const [loader, setLoader] = useState(true);
  const { catId } = useParams();
  useEffect(() => {
    const getItems = getFirestore();
    const itemCollection = getItems.collection("Items");
    itemCollection
      .get()
      .then((res) => {
        const items = res.docs.map((item) => item.data());
        console.log(items);
        setCurso(items.filter((item) => item.categoryId === catId));
      })
      .then(() => setLoader(false));
  }, [catId]);

  return (
    <div className="ItemListContainer">
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
