import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getFirestore } from "../../firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    const getItems = getFirestore();
    const itemCollection = getItems.collection("Items");
    itemCollection
      .get()
      .then((res) => {
        const items = res.docs.map((item) => item.data());
        console.log(items);
        setProduct(items.filter((item) => item.id === productId));
      })
      .then(() => setLoader(true));
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
