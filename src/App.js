import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
import CartProvider from "./components/Context/CartContext";
import CartContainer from "./components/CartContainer/CartContianer";
import FinalizarCompra from "./components/FinalizarCompra/FinalizarCompra";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:catId">
              <ItemListContainer />
            </Route>
            <Route exact path="/producto/">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/producto/:productId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route exact path="/finalizarcompra">
              <FinalizarCompra />
            </Route>
            <Route exact path="">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
