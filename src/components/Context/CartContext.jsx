import React, { useContext, createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const InitialState = {
  addedItem: [],
  totalPrice: 0,
};
export default function CartProvider({ children }) {
  const [isCart, setIsCart] = useState(InitialState);

  const addItem = (item) => {
    const totalSum = () => {
      return (
        isCart.addedItem.reduce(
          (acc, items) => (acc += items.precio * items.quantity),
          0
        ) +
        item.quantity * item.precio
      );
    };
    const isInCart = isCart.addedItem.find((added) => added.id === item.id);
    const suma = totalSum(isCart, item);
    if (isInCart) {
      isInCart.quantity += item.quantity;
      setIsCart({ ...isCart, totalPrice: suma });
    } else {
      const newAddedItems = [...isCart.addedItem, item];
      setIsCart({
        ...isCart,
        addedItem: newAddedItems,
        totalPrice: totalSum(isCart.totalPrice, item),
      });
    }
  };

  const clear = () => {
    setIsCart(InitialState);
  };

  const deleteItem = (item) => {
    const removeSum = () => {
      return isCart.addedItem.reduce(
        (acc, items) => (acc += items.precio * items.quantity),
        0
      );
    };
    const removeItem = isCart.addedItem.findIndex(
      (remove) => remove.id === item.id
    );
    if (removeItem !== -1) {
      isCart.addedItem.splice(removeItem, 1);
      setIsCart({
        ...isCart,
        totalPrice: removeSum(isCart.totalPrice, item),
      });
    } else {
      Swal.fire({
        title: "Ups!",
        text: "No tienes este producto en tu carrito!",
        icon: "error",
        confirmButtonColor: "lightseagreen",
        showCloseButton: true,
      });
    }
  };
  console.log("carrito en context", isCart);

  return (
    <CartContext.Provider value={{ isCart, addItem, clear, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
}
