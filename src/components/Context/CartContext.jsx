import React, { useContext, createContext, useState, useEffect } from "react";
import Data from "../../data";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const InitialState = {
  addedItem: [],
  totalPrice: 0,
};
export default function CartProvider({ children }) {
  const [isCart, setIsCart] = useState(InitialState);
  const [product, setProduct] = useState(null);

  const addItem = (item) => {
    const totalSum = () => {
      return isCart.addedItem.reduce(
        (acc, items) => (acc += items.precio * items.quantity),
        0
      );
    };
    const isInCart = isCart.addedItem.find((added) => added.id === item.id);
    if (isInCart) {
      isInCart.quantity += item.quantity;
      setIsCart({ ...isCart });
    } else {
      const newAddedItems = [...isCart.addedItem, item];
      setIsCart({
        ...isCart,
        addedItem: newAddedItems,
        totalPrice: totalSum(isCart.totalPrice, item),
      });
      console.log("carrito en context", isCart);
    }
  };

  const clear = () => {
    setIsCart(InitialState);
  };

  const deleteItem = (item) => {
    if (
      isCart.addedItem.splice(
        isCart.addedItem.findIndex((remove) => remove.id !== item.id),
        1
      )
    ) {
      console.log("item borrado");
    }
  };
  console.log("carrito en context", isCart);
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      resolve(Data);
      console.log(Data);
    });
    getItems.then((result) => {
      setProduct(result);
    });
  }, []);
  return (
    <CartContext.Provider
      value={{ isCart, addItem, clear, deleteItem, product }}
    >
      {children}
    </CartContext.Provider>
  );
}
