import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
  <BrowserRouter>
  <NavBar/>
  <Switch>
    <Route exact path="/">
      <ItemListContainer/>
    </Route>
  </Switch>
</BrowserRouter>
  );
}

export default App;
