import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import Data from "../../data";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setLoader(true);
      setTimeout(() => resolve(Data), 2000);
    });
    productId
      ? getItems.then((value) => {
          setProduct(value.filter((p) => p.id === parseInt(productId)));
          setLoader(false);
        })
      : getItems.then((result) => {
          setProduct(result);
          setLoader(false);
        });
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
