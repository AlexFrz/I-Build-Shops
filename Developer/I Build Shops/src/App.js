import React, { Suspense, useEffect, useRef } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header";
import SellThisPen from "./components/SellThisPen";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <SellThisPen />
        </Route>
        <Route path="/works" />
      </Switch>
    </Router>
  );
}
