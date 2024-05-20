import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "routes";
import store from "./store";
import { Provider } from "react-redux";

//Deixando o store disponivel/visivel para toda a aplicação por meio de um provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
