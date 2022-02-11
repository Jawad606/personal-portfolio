import React from "react";
import NavBar from "./NavBar";
import "../style/About.css";
import Slider from "react-slick";
import "font-awesome/css/font-awesome.css";
import {
  faAngleRight,
  faSmileBeam,
  faBookJournalWhills,
  faHeadset,
  faAward,
  faStore,
  faBarChart,
  faCalendar,
  faPaintBrush,
  faDatabase,
  faGraduationCap,
  faFileLines,
  faProjectDiagram,
  faTowerBroadcast,
  faFingerprint,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
function RenderaboutMe() {
  return (
    <div className="container p-4">
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
  return (
    <div className="container p-4">
      <div className="row justify-content-center ">
        <div className="col-md-3 col-6  d-flex justify-content-center position-relative  my-3">
          <div className="box">
            <div className=" d-flex justify-content-center align-items-center emogy position-absolute top-0 start-50 translate-middle">
              <FontAwesomeIcon
                className="icon-re"
                icon={faSmileBeam}
                size="2x"
              />
            </div>
            <div className="row d-flex justify-content-center py-3">
              <div className="col-md-12 d-flex justify-content-center">
                <h3>
                  <CountUp end={50} duration={5}>
                    0
                  </CountUp>
                </h3>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <p>Happy Client</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6  d-flex justify-content-center position-relative  my-3">
          <div className="box">
            {" "}
            <div className=" d-flex justify-content-center align-items-center emogy position-absolute top-0 start-50 translate-middle">
              <FontAwesomeIcon
                className="icon-re"
                icon={faBookJournalWhills}
                size="2x"
              />
            </div>
            <div className="row d-flex justify-content-center py-3">
              <div className="col-md-12 d-flex justify-content-center">
                <h3>
                  <CountUp end={15} duration={5}>
                    0
                  </CountUp>
                </h3>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <p>Project</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6  d-flex justify-content-center position-relative   my-3">
          <div className="box">
            {" "}
            <div className=" d-flex justify-content-center align-items-center emogy position-absolute top-0 start-50 translate-middle">
              <FontAwesomeIcon className="icon-re" icon={faHeadset} size="2x" />
            </div>
            <div className="row d-flex justify-content-center py-3">
              <div className="col-md-12 d-flex justify-content-center">
                <h3>
                  <CountUp end={500} duration={5}>
                    0
                  </CountUp>
                </h3>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <p>Hours Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6  d-flex justify-content-center position-relative   my-3">
          <div className="box">
            {" "}
            <div className=" d-flex justify-content-center align-items-center emogy position-absolute top-0 start-50 translate-middle">
              <FontAwesomeIcon className="icon-re" icon={faAward} size="2x" />
            </div>
            <div className="row d-flex justify-content-center py-3">
              <div className="col-md-12 d-flex justify-content-center">
                <h3>
                  <CountUp end={10} duration={5}>
                    0
                  </CountUp>
                </h3>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <p>Happy Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function RenderSkill() {
  return (
    <div className="container py-5 p-4">
      <div className="row">
        <h6 className="aboutme">Skills</h6>
        <div className="col-md-6">
          <div className="skill-body">
            <div className="my-4">
              <h6>html</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <h6>css</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <h6>JavaScript</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <h6>React Js</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skill-body">
            <div className="my-4">
              <h6>python</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <h6>PhP</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <div></div>
              <h6>photoshp</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-4">
              <div></div>
              <h6>Problem Solving</h6>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Renderinterest() {
  const color = [
    { id: 1, color: "#ffbb2c", title: "lorem", icon: faStore },
    { id: 2, color: "#5578ff", title: "lorem", icon: faBarChart },
    { id: 3, color: "#e80368", title: "lorem", icon: faCalendar },
    { id: 4, color: "#e361ff", title: "lorem", icon: faPaintBrush },
    { id: 5, color: "#47aeff", title: "lorem", icon: faDatabase },
    { id: 6, color: "#ffa76e", title: "lorem", icon: faGraduationCap },
    { id: 7, color: "#11dbcf", title: "lorem", icon: faFileLines },
    { id: 8, color: "#4233ff", title: "lorem", icon: faProjectDiagram },
    { id: 9, color: "#b2904f", title: "lorem", icon: faFingerprint },
    { id: 10, color: "#b20969", title: "lorem", icon: faFingerprint },
    { id: 11, color: "#ff5828", title: "lorem", icon: faTowerBroadcast },
    { id: 12, color: "#29cc61", title: "lorem", icon: faFingerprint },
  ];
  const colors = color.map((post) => (
    <div key={post.id} className="col-md-3 box-interest p-3 m-2">
      <div className="row d-flex align-items-center">
        <div className="col-md-4">
          <FontAwesomeIcon
            style={{ color: post.color }}
            className="icon-re icon-size"
            icon={post.icon}
          />
        </div>
        <div className="col-md-8 p-0">
          <h4>{post.title}</h4>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container p-4">
      <div className="row">
        <h6 className="aboutme">interests</h6>
        <div className="col-md-12">
          {" "}
          <div className="row d-flex justify-content-center">{colors}</div>
        </div>
      </div>
    </div>
  );
}
function RenderTest() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container my-5 p-4 ">
      <div className="row">
        <h6 className="aboutme">Testimonials</h6>
        <div className="col-md-12 mb">
          <Slider {...settings}>
            <div>
              <div className="test-body test-h position-relative">
                <div className="postion position-absolute top-100 translate-middle">
                  <img
                    src="assets/images/testimonials/testimonials-1.jpg"
                    alt="t1"
                  />
                </div>
                <p>
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteLeft}
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteRight}
                  />{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="test-body test-h position-relative">
                <div className="postion position-absolute top-100 translate-middle">
                  <img
                    src="assets/images/testimonials/testimonials-2.jpg"
                    alt="t1"
                  />
                </div>
                <p>
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteLeft}
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteRight}
                  />{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="test-body test-h position-relative">
                <div className="postion position-absolute top-100 translate-middle">
                  <img
                    src="assets/images/testimonials/testimonials-3.jpg"
                    alt="t1"
                  />
                </div>
                <p>
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteLeft}
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteRight}
                  />{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="test-body test-h position-relative">
                <div className="postion position-absolute top-100 translate-middle">
                  <img
                    src="assets/images/testimonials/testimonials-4.jpg"
                    alt="t1"
                  />
                </div>
                <p>
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteLeft}
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteRight}
                  />{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="test-body test-h position-relative">
                <div className="postion position-absolute top-100 translate-middle">
                  <img
                    src="assets/images/testimonials/testimonials-5.jpg"
                    alt="t1"
                  />
                </div>
                <p>
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteLeft}
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <FontAwesomeIcon
                    className="icon-rt"
                    size="2x"
                    icon={faQuoteRight}
                  />{" "}
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="e-header">
      <NavBar />
      <div className="">
        <div className="py-5 px-4 ">
          <div className="about">
            <RenderaboutMe />
            <Rendercounter />
            <RenderSkill />
            <Renderinterest />
            <RenderTest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
