import React from "react";
import "../NavBar/NavBar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { useCart } from "../Context/CartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CartWidget() {
  const cart = useCart();
  const cantidadCarrito = cart.isCart.totalQuantity;
  return (
    <>
      <StyledBadge badgeContent={cantidadCarrito} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </>
  );
}
