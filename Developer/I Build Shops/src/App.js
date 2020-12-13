import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components

import Works from "./components/Works";
import WhoAmI from "./components/WhoAmI";
import Services from "./components/Services";

export default function App() {
  return (
    <AnimatePresence>
      <Router>
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/about" component={WhoAmI} />
        </Switch>
      </Router>
    </AnimatePresence>
  );
}
