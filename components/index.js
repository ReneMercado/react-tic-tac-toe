import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "../redux/createStore";
import { Provider } from "react-redux";

let app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
