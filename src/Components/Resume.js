import React from "react";
import NavBar from "./NavBar";
import "../style/Resume.css";
function RenderResume() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Resume</h6>
          <h1 className="des">Check My Resume</h1>
          <div className="row py-2">
            <div className="col-md-6 res-body">
              <div>
                <h4>Summary</h4>
                <div className="body-rs position-relative">
                  <h5>Alice Barkley</h5>
                  <p>
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Education</h4>
                <div className="body-rs position-relative">
                  <h5>Master of Fine Arts & Graphic Design</h5>
                  <h6>2017-2019</h6>
                  <p>Rochester Institute of Technology, Rochester, NY</p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
                <div className="body-rs position-relative">
                  <h5>Master of Fine Arts & Graphic Design</h5>
                  <h6>2017-2019</h6>
                  <p>Rochester Institute of Technology, Rochester, NY</p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 res-body">
            <div>
                <h4>Professional Experience</h4>
                <div className="body-rs position-relative">
                  <h5>Senior graphic design specialist</h5>
                  <h6>2017-2032</h6>
                  <p>
                  Experion, New York, NY
                  </p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Summary</h4>
                <div className="body-rs position-relative">
                  <h5>Graphic design specialist</h5>
                  <h6>2017-2032</h6>
                  <p>
                  Stepping Stone Advertising, New York, NY
                  </p>
                  <ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Resume() {
  return (
    <>
      <NavBar />
      <div className="py-5 px-4  ">
      <div className="about">
      <RenderResume />
      </div>
      
      </div>
    </>
  );
}

export default Resume;
