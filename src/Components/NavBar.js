import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../style/Nav.css";
function NavBar(props) {
  console.log(props.home);
  let name = "";
  let flex = "";
  let width = "";
  if ("home" !== props.home) {
    name = "Emily Jones";
    flex = "d-flex justify-md-content-end width-nav";
    width = "container";
  }
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={width}>
      <Navbar  dark bg-dark="true" expand="md">
        <NavbarToggler className="button-toggle" onClick={toggle} />
        <NavbarBrand className="mr-md-auto header-title" href="/">
          {name}
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
         <div className={flex}> <Nav  navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/profolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contect">
                Contect
              </NavLink>
            </NavItem>
          </Nav></div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
