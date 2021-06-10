import React, { useContext, createContext, useState, useEffect } from "react";
import Data from "../../data";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export default function CartProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => resolve(Data), 2000);
      console.log(Data);
    });
    getItems.then((result) => {
      setProducts(result);
      console.log("data completa", result);
    });
  }, []);

  return (
    <>
      <CartContext.Provider value={isCart}>{children}</CartContext.Provider>
    </>
  );
}
