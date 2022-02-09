import React from "react";
import NavBar from "./NavBar";
import "../style/Services.css";
import { faFootball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RenderService() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Service</h6>
          <h1 className="des"> My Service</h1>
          <div className="row py-5 m-3 ">
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
            <div className="col-md-4 my-3 d-flex justify-content-center ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Services() {
  return (
    <>
      <NavBar />
      <div className="py-5 px-4">
        <div className="about">
          <RenderService />
        </div>
      </div>
    </>
  );
}

export default Services;
