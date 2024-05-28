import React from "react";
import NavBar from "./NavBar";
import "../style/Resume.css";
import { FaDownload } from "react-icons/fa";
function RenderResume() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Resume</h6>
          <div className="d-flex justify-content-between">
            <h1 className="des">Check My Resume</h1>
            <a
              className="download"
              href={"/assets/resume/resume.pdf"}
              download="m_jawad_hassan_resume.pdf"
            >
              <FaDownload />
            </a>
          </div>

          <div className="row py-2">
            <div className="col-md-6 res-body">
              <div>
                <h4>Summary</h4>
                <div className="body-rs position-relative">
                  <h5>MERN Application</h5>
                  <p>
                    Innovative and deadline-driven Software Developer with 6
                    months of experience in React js, Node js, Redux and
                    RestApi. This website is developed for Comsats university
                    sahiwal. This Appliction is responsible for handling the
                    inventory in university.
                    {/* Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable. */}
                  </p>
                  <ul>
                    <li>Comsats Software House Sahiwal</li>
                    <li>+92 321552584</li>
                    <li>Soon Host</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Education</h4>
                <div className="body-rs position-relative">
                  <h5>Software Engineering</h5>
                  <h6>2019-2023</h6>
                  <p>Comsats Univesity Islamabad, Sahiwal Campus</p>
                  <p>
                    I am currently Software Engneering student. I completed my
                    degree with
                    <span className="underline"> 3.41 </span> CGPA. I am working
                    on MERN Stack. I am also working with Comsats Software
                    House.
                  </p>
                  <ul>
                    <li>Sahiwal, Pakistan</li>
                    <li>(040) 4305005</li>
                    <li>https://sahiwal.comsats.edu.pk</li>
                  </ul>
                </div>
                <div className="body-rs position-relative">
                  <h5>Intermediate with ICS</h5>
                  <h6>2017-2019</h6>
                  <p>The Prime Standerd College</p>
                  <p>
                    I done my Intermediate with first division from Toba tek
                    singh. I choise ICS because i want to join computer feild. I
                    got handsome knowledge about computer during this time.
                    Which help in my higher Education.
                  </p>
                  <ul>
                    <li>Toba Tek Singh, Pakistan</li>
                    <li>(046) 2200536</li>
                    <li>
                      The Prime Standard College TPSC Toba Tek Singh - EduVision
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 res-body">
              <div>
                <h4>Professional Experience</h4>
                <div className="body-rs position-relative">
                  <h5>Associate Software Engineer</h5>
                  <h6>JUN 2023- PRE</h6>
                  <p>Pakistan</p>
                  <ul>
                    <li>
                      I worked as a Software Engineer with experience in Mern
                      Stack and AI
                    </li>
                    <li>Develop SaaS application, dashboard, Shopify Apps</li>
                    <li>
                      I am working with following technologies Node, React,
                      Next, Express, Nest, Mongodb, MySql, PostGree, Tailwind,
                      Material UI, Bootstrap, Redux, Redux toolkit Query
                    </li>
                    <li>
                      From machine learning perspective django, numpy, pandas,
                      matlibplot, tenserflow, ANN, CNN, RNN,
                    </li>
                  </ul>
                </div>
                <div className="body-rs position-relative">
                  <h5>Software Developer & Software Engneering</h5>
                  <h6>2017-2022</h6>
                  <p>Pakistan</p>
                  <ul>
                    <li>
                      I worked in Photoshop with 2+ year of experience. I have
                      experience of photo color grading and retouching.
                    </li>
                    <li>
                      Vidoe editing is also one of my experience. I am runing a
                      youtube channel as well. I teach my viewer about tech.{" "}
                    </li>
                    <li>
                      I worked on the desktop application as a project. Its a
                      management system for tailor. This application contains
                      backup system and encryption of data.
                    </li>
                    <li>
                      Comsats University sahiwal invertory management system is
                      developed by myself. I worked with react, node, redux,
                      rest apis, mongodb, and Auth.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                {/* <h4>Summary</h4>
                <div className="body-rs position-relative">
                  <h5>Graphic design specialist</h5>
                  <h6>2017-2032</h6>
                  <p>Stepping Stone Advertising, New York, NY</p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                  </ul>
                </div> */}
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
    <div className="e-header">
      <NavBar />
      <div className="py-5 px-4  ">
        <div className="about">
          <RenderResume />
        </div>
      </div>
    </div>
  );
}

export default Resume;
