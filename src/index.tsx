import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { MeliApp } from "./MeliApp";
import { store } from "./store/store";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MeliApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
