import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { HomePage } from "./components/HomePage";
import { BadRoutePage } from "./components/common/BadRoutePage";

export function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route component={BadRoutePage}></Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
