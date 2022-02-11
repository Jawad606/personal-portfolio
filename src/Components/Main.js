import React from "react";
import Home from "./Home";
import About from "./About";

import Resume from "./Resume";

import Services from "./Services";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Portfolio from "./Portfolio";

import Contect from "./Contect";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";
function Main() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition  key={location.pathname} classNames="my-node" timeout={300}>
        <Switch location={location}>
          <Route path="/home" component={() => <Home />} />
          <Route path="/about" component={() => <About />} />
          <Route path="/resume" component={() => <Resume />} />
          <Route path="/services" component={() => <Services />} />
          <Route path="/profolio" component={() => <Portfolio />} />
          <Route path="/contect" component={() => <Contect />} />

          <Redirect to="/home" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Main;
