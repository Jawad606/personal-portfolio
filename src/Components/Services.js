import React from "react";
import NavBar from "./NavBar";
import "../style/Services.css";
import { faFootball,faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RenderService() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Service</h6>
          <h1 className="des"> My Service</h1>
          <div className="row py-5 m-3 d-flex justify-content-center">
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faCode}
                  size="2x"
                  className="fa-football icon-color icon-before"
                />
                <h3>React JS</h3>
                <p>
                  React js most used react library which is very handy to developer web applications.

                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faFootball}
                  size="2x"
                  className="fa-football icon-color icon-before"
                />
                <h3>Node JS</h3>
                <p>
                  Node js used for server side rendering. It is used to handle Rest Api.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faFootball}
                  size="2x"
                  className="icon-color icon-before"
                />
                <h3>Express JS</h3>
                <p>
                Express.js is is designed for
                 building web applications and APIs.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faFootball}
                  size="2x"
                  className="icon-color icon-before"
                />
                <h3>MongoDB</h3>
                <p>
                  MongoDB is NoSQL database. Its a very lightweight database which 
                  worked both online and offline as well.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faFootball}
                  size="2x"
                  className="icon-color icon-before"
                />
                <h3>Redux</h3>
                <p>
                  Redux is a state management library which is used to handle the
                  the data with in react.
                </p>
              </div>
            </div>
            {/* <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FontAwesomeIcon
                  icon={faFootball}
                  size="2x"
                  className="icon-color icon-before"
                />
                <h3>Lorem Ipsum</h3>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="e-header">
      <NavBar />
      <div className="py-5 px-4">
        <div className="about">
          <RenderService />
        </div>
      </div>
    </div>
  );
}

export default Services;
