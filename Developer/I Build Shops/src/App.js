import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components

import SellThisPen from "./components/SellThisPen";
import Works from "./components/Works";
import WhoAmI from "./components/WhoAmI";

export default function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={SellThisPen} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/about" component={WhoAmI} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}
