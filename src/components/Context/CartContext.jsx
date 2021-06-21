import React, { useContext, createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const InitialState = {
  addedItem: [],
  totalPrice: 0,
  totalQuantity: 0,
};
export default function CartProvider({ children }) {
  const [isCart, setIsCart] = useState(InitialState);

  const sumQuantity = (isCart, item) => {
    return (
      isCart.addedItem.reduce((acc, items) => (acc += items.quantity), 0) +
      item.quantity
    );
  };

  const subQuantity = (isCart, item) => {
    return (
      isCart.addedItem.reduce((acc, items) => (acc += items.quantity), 0) -
      item.quantity
    );
  };

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
    const cantidad = sumQuantity(isCart, item);
    if (isInCart) {
      isInCart.quantity += item.quantity;
      setIsCart({ ...isCart, totalPrice: suma, totalQuantity: cantidad });
    } else {
      const newAddedItems = [...isCart.addedItem, item];
      setIsCart({
        ...isCart,
        addedItem: newAddedItems,
        totalPrice: totalSum(isCart.totalPrice, item),
        totalQuantity: cantidad,
      });
    }
  };

  const clear = () => {
    setIsCart(InitialState);
    Swal.fire({
      title: "",
      text: "El carrito ha sido limpiado con éxito",
      icon: "success",
      confirmButtonColor: "lightseagreen",
      showCloseButton: true,
    });
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
    const cantidad = subQuantity(isCart, item);
    if (removeItem !== -1) {
      isCart.addedItem.splice(removeItem, 1);
      setIsCart({
        ...isCart,
        totalPrice: removeSum(isCart.totalPrice, item),
        totalQuantity: cantidad,
      });
      Swal.fire({
        title: "",
        text: "Se ha removido el producto con éxito",
        icon: "success",
        confirmButtonColor: "lightseagreen",
        showCloseButton: true,
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

  return (
    <CartContext.Provider value={{ isCart, addItem, clear, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
}
