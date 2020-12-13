import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components

import SellThisPen from "./components/SellThisPen";
import Works from "./components/Works";
import WhoAmI from "./components/WhoAmI";
import Modal from "./components/Modal";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function App() {
  return (
    <AnimatePresence>
      <Router>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/about" component={WhoAmI} />
          <Route exact path="/services" component={SellThisPen} />
        </Switch>
      </Router>
    </AnimatePresence>
  );
}
