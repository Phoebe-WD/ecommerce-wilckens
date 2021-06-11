import React, { useContext, createContext, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const InitialState = {
  addedItem: [{ name: "", precio: 0, quantity: 1 }],
  totalPrice: 0,
};
export default function CartProvider({ children }) {
  const [isCart, setIsCart] = useState(InitialState);

  const addItem = (item) => {
    console.log(item.name);
    if (isCart.addedItem.some((added) => added.name === item.name)) {
      item.quantity += isCart.addedItem.quantity;
      setIsCart(item);
      //Ya existe el item
      return;
    }
    const newAddedItems = [...isCart.addedItem, item];
    setIsCart({ ...isCart, addedItem: newAddedItems });
  };

  const clear = () => {
    setIsCart(InitialState);
  };

  const deleteItem = (item) => {
    if (isCart.addedItem.filter((remove) => remove.id !== item.id)) {
      console.log("item borrado");
    }
  };
  console.log("carrito en context", isCart);
  return (
    <CartContext.Provider value={{ isCart, addItem, clear, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
}
