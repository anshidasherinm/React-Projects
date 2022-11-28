import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/product-context";
import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";
import configureProductStore from "./hooks-store/products-store";
configureProductStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
