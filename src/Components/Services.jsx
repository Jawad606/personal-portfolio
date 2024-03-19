import React from "react";
import NavBar from "./NavBar";
import "../style/Services.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPytorch,
  SiRedux,
} from "react-icons/si";
function RenderService() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Experties</h6>
          <h1 className="des"> My Tech Stack</h1>
          <div className="row py-5 m-3 d-flex justify-content-center">
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FaReact
                  size={"40px"}
                  className="fa-service icon-color icon-before"
                />
                <h3>React JS</h3>
                <p>
                  React js most used react library which is very handy to
                  developer web applications.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <FaNodeJs
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>Node JS</h3>
                <p>
                  Node js used for server side rendering. It is used to handle
                  Rest Api.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiExpress
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>Express JS</h3>
                <p>
                  Express.js is is designed for building web applications and
                  APIs.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiMongodb
                  size=""
                  className="fa-service icon-color icon-before"
                />
                <h3>MongoDB</h3>
                <p>
                  MongoDB is NoSQL database. Its a very lightweight database
                  which worked both online and offline as well.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiRedux
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>Redux</h3>
                <p>
                  Redux is a state management library which is used to handle
                  the the data with in react.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiNextdotjs
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>Next</h3>
                <p>
                  Full Stack React Framework to develop a complete application
                  in one place.
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiNestjs
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>Nest</h3>
                <p>
                  Next js is advance backend framework, help to improve
                  performance and optimized code
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
              <div className="box-ser">
                <SiPytorch
                  size={20}
                  className="fa-service icon-color icon-before"
                />
                <h3>PyTorch</h3>
                <p>
                  PyTorch is advance library written in python to used machine
                  learning algorthim develop by facebook
                </p>
              </div>
            </div>
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
