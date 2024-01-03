import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "./redux/compareSlice";
import { Provider } from "react-redux";
import { products } from "./constants";
import './index.css'

const store = configureStore({
  reducer: {
    vehicles: products, // Use the reducer function for the 'vehicles' slice
    compare: compareSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
