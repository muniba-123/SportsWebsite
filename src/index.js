import React from "react";
import "./index.css";
import "./Assets/Css/styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
