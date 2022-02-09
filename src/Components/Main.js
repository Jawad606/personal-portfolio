import React from "react";
import Home from "./Home";
import About from "./About";

import Resume from "./Resume";

import Services from "./Services";

import Portfolio from "./Portfolio";

import Contect from "./Contect";

import { Switch, Route, Redirect } from "react-router-dom";
function Main() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <div className="header">
        <Route path="/about" component={() => <About />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route path="/services" component={() => <Services />} />
        <Route path="/profolio" component={() => <Portfolio />} />
        <Route path="/contect" component={() => <Contect />} />
        </div>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Main;
