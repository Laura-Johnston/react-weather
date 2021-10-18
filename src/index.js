import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Weather defaultCity="London" />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(<App />, document.getElementById("root"));
