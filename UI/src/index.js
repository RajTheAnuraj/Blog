import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./style/style.css";

import { App } from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app"),
);
