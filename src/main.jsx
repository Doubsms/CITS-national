import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/ReactToastify.css"
import {ToastContainer} from "react-toastify"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
