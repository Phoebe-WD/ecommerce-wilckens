import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ items, categoryId }) {
  const claseCategory = `ItemList ${categoryId}`;
  return (
    <div className={claseCategory}>
      {items?.map((item) => {
        return (
          <Item
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
        );
      })}
    </div>
  );
}
