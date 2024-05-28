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
  faUserGroup,
  faGraduationCap,
  faBaseball,
  faFootball,
  faFingerprint,
  faQuoteLeft,
  faQuoteRight,
  faGamepad,
  faBus
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
              <img src="assets\images\me.png" alt="me" width="100%" />
            </div>
            <div className="col-md-7 head">
              <h2>Software Engineer & MERN Developer</h2>
              <p>
                I am passionate about developing new technology. I used new technlogy to meet the 
                advance requirement. I'm focused and hard working. {" "}
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
                    <span className="span">Graduate</span>
                  </div>
                  <div className="info">
                    <FontAwesomeIcon className="icon-ri" icon={faAngleRight} />
                    <strong className="strong">Email:</strong>
                    <span className="span">jawadmirza606@gmail.com</span>
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
              <h6>Node JS</h6>
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
              <h6>Communication Skill</h6>
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
    { id: 1, color: "#ffbb2c", title: "Coding", icon: faStore },
    { id: 2, color: "#5578ff", title: "Music", icon: faBarChart },
    { id: 3, color: "#e80368", title: "Reading", icon: faCalendar },
    { id: 4, color: "#e361ff", title: "Searching", icon: faPaintBrush },
    { id: 5, color: "#47aeff", title: "Photography", icon: faDatabase },
    { id: 6, color: "#ffa76e", title: "Writing", icon: faGraduationCap },
    { id: 7, color: "#11dbcf", title: "Cricket", icon: faBaseball },
    { id: 8, color: "#4233ff", title: "FootBall", icon: faFootball },
    { id: 9, color: "#b2904f", title: "Public speaking", icon: faUserGroup },
    { id: 10, color: "#b20969", title: "Gaming", icon: faGamepad },
    { id: 11, color: "#ff5828", title: "Traveling", icon: faBus },
    { id: 12, color: "#29cc61", title: "Video Editing", icon: faFingerprint },
  ];
  const colors = color.map((post) => (
    <div key={post.id} className="col-md-3 col-5  box-interest  m-2">
      <div className="row d-flex align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <FontAwesomeIcon
            style={{ color: post.color }}
            className="icon-re icon-size"
            icon={post.icon}
          />
        </div>
        <div className="col-md-8  p-0 m-0 d-flex justify-content-md-start justify-content-center py-3 align-items-center">
          <h4 className="p-0 m-0 text-center">{post.title}</h4>
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
             You have been absolutely wonderful for Kinship Center,
              and I can't thank you enough for all your tremendous skills,
               support and patience .
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
                  Communications is attentive, personable, and professional. Will and his team provide great support for my company's needs.
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
                  Always available to answer any questions.
                   Very knowledgeable about the services they
                    provide. Would recommend to anyone!
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
                  It is a pleasure working with Will. He is extremely knowledgeable, business savvy, and positive. His approach to challenges and opportunities is innovative
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
                 Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market.
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
            {/* <RenderTest /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
