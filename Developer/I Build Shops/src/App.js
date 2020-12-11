import React, { useState } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components

import SellThisPen from "./components/SellThisPen";
import Works from "./components/Works";
import WhoAmI from "./components/WhoAmI";
import Modal from "./components/Modal";
import Contact from "./components/Contact";

export default function App() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={SellThisPen} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/about" component={WhoAmI} />
      </Switch>
    </AnimatePresence>
  );
}
