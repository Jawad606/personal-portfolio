import React from "react";
import "../style/Home.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "./NavBar";
function Home() {



  return (
    <div className="container-fluid header ">
      <div className="container heigt">
        <div className="row d-flex align-items-center">
          <div className="col-md-12 ">
            <div className="Header-Tiltle ">
              <h1 className="header-font header-color">Emily Jones</h1>
              <p className="text-color title-des">
                I'm a passionate{" "}
                <span className="underline">graphic designer</span> from New
                York
              </p>
            </div>
            <NavBar home='home'  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
