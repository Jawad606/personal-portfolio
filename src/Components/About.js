import React from "react";
import NavBar from "./NavBar";
import "../style/About.css";
import "font-awesome/css/font-awesome.css";
import PureCounter from "@srexi/purecounterjs";
import { faAngleRight,faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RenderaboutMe() {
  return (
    <div className="container about ">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">ABOUT</h6>
          <h1 className="des">learn more about me</h1>
          <div className="row">
            <div className="col-md-5">
              <img src="assets/images/me.jpg" alt="me" width="100%" />
            </div>
            <div className="col-md-7 head">
              <h2>UI/UX & Graphic Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">BirthDay:</strong>
                    <span className="span">28 December 2000</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Website:</strong>
                    <span className="span">www.CodeX.com</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Phone:</strong>
                    <span className="span">03117157002</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">City:</strong>
                    <span className="span">Toba Tek Singh</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Age:</strong>
                    <span className="span">21</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Degree:</strong>
                    <span className="span">Undergraduate</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Email:</strong>
                    <span className="span">jawadmirza606</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Freelance:</strong>
                    <span className="span">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Rendercounter() {
  // eslint-disable-next-line no-unused-vars
  const pure = new PureCounter();
  return (
    <div className="container">
      <div className="row ">
        
        <div className="col-md-3 box  d-flex justify-content-center position-relative">
        <div className=" d-flex justify-content-center align-items-center emogy position-absolute top-0 start-50 translate-middle">
          <FontAwesomeIcon className="icon-re" icon={faSmileBeam} size="2x" />
        </div>
          <div className="row d-flex justify-content-center ">
      
            <div className="col-md-12 d-flex justify-content-center">
              <h3>
                <span
                  data-purecounter-start="0"
                  data-purecounter-duration="2"
                  data-purecounter-end="213"
                  className="purecounter"
                >
                  0
                </span>
              </h3>
            </div>

            <div className="col-md-12 d-flex justify-content-center">
              <p>Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="">
      <NavBar />
      <div className="header">
        <div className="py-5 about">
          <RenderaboutMe />
          <Rendercounter />
        </div>
      </div>
    </div>
  );
}

export default About;
