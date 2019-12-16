import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/style.scss";

import { App } from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app"),
);
