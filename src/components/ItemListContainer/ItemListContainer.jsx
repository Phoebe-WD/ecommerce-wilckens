import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router";
import Data from "../../data";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ItemListContainer() {
  const [curso, setCurso] = useState(null);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();
  useEffect(() => {
    const myCursos = new Promise((resolve) => {
      setLoader(true);
      setTimeout(() => {
        resolve(Data);
      }, 2000);
      console.log("itemlist data", Data);
    });
    catId
      ? myCursos.then((result) => {
          console.log(result);
          setCurso(result.filter((i) => i.categoryId === parseInt(catId)));
          setLoader(false);
        })
      : myCursos.then((value) => {
          setCurso(value);
          setLoader(false);
        });
  }, [catId]);

  console.log(`q categoria es ${catId}`);
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
