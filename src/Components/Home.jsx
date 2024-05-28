import React from "react";
import "../style/Home.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./NavBar";
function Home() {



  return (
    <div className="container-fluid e-header ">
      <img className="bg-image" src={'/assets/images/bg.png'} alt="bg" />
      <div className="container heigt animation">
        <div className="row d-flex align-items-center">
          <div className="col-md-12 ">
            <div className="Header-Tiltle ">
              <h1 className="header-font header-color">Muhammad Jawad Hassan</h1>
              <p className="text-color title-des">
                I'm a passionate{" "}
                <span className="underline">Software Engineer</span> from Pakistan
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
