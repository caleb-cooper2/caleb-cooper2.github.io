import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from "react-dom/client"
import App from "./App";
import "./styles.css";

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);