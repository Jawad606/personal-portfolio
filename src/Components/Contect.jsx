import React, { useState } from "react";
import NavBar from "./NavBar";
import "../style/Contect.css";
import "font-awesome/css/font-awesome.css";
import {
  faMapMarkerAlt,
  faMessage,
  faNetworkWired,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, FormFeedback } from "reactstrap";
function RenderForm() {
  const [username, setName] = useState("");
  const [email, setemail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [touched, settouched] = useState({
    username: !username,
    email: !email,
  });

  const handleBlur = (field) => (evt) => {
    settouched({
      touched: { ...touched, [field]: true },
    });
  };

  const handleSubmit = (evt) => {
    const value = [username, email, Subject, Message];
    evt.preventDefault();
    alert(`Submitting Name ${value}`);
  };
  const validate = (username, email) => {
    const errors = {
      username: "",
      email: "",
    };
    if (touched.username && username.length < 3 && username.length > 0) {
      errors.username = "First Name should be >= 3 characters";
    } else if (touched.username && username.length > 10) {
      errors.username = "First Name should be <= 10 characters";
    }
    if (touched.email && email.split("").filter((x) => x === "@").length !== 1)
      errors.email = "Please Enter valid email";

    return errors;
  };

  const errors = validate(username, email);
  return (
    <div className="container p-4 ">
      <div className="row form">
        <div className="col-md-12">
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  valid={errors.username === ""}
                  invalid={errors.username !== ""}
                  onBlur={() => handleBlur("username")}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </div>
              <div className="col-md-6">
                <Input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={() => handleBlur("email")}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input
                  className="form-control"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={Subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <Input
                  className="form-control my-3"
                  type="textarea"
                  id="message"
                  row="6"
                  name="message"
                  placeholder="Message"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-2">
                <Input
                  className="button-form my-3"
                  type="submit"
                  id="messaage"
                  row="6"
                  name="messaage"
                  placeholder="Message"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
function RenderContect() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-12">
          <h6 className="aboutme">Contect</h6>
          <h1 className="des">Contect Me</h1>
          <div className="row size d-flex justify-content-md-between">
            <div className="col-md-6   col-12  my-2">
              <div className="box-con">
                {" "}
                <div className="row ">
                  <div className="col-md-2 d-flex justify-content-md-end justify-content-center">
                    <div className="icon-con d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon size="1x" icon={faMapMarkerAlt} />
                    </div>
                  </div>
                  <div className="col-md-10 text-md-start text-center my-1">
                    <div>
                      <h4>My Address</h4>
                    </div>
                    <div>
                      {" "}
                      <p>Rajana, Toba Tek Singh, Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-12  my-2">
              <div className="box-con">
                {" "}
                <div className="row ">
                  <div className="col-md-2 d-flex justify-content-md-end justify-content-center">
                    <div className="icon-con d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon size="1x" icon={faNetworkWired} />
                    </div>
                  </div>
                  <div className="col-md-10 text-md-start text-center my-1">
                    <div>
                      <h4>Social Media</h4>
                    </div>
                    <div className="icon-social">
                      {" "}
                      <a href="https://web.facebook.com/jawad.mirza.355" rel="noreferrer" target={'_blank'}>
                      <FontAwesomeIcon
                        className="icon-s me-1"
                        icon={faFacebook}
                      /></a>
                      <a href="https://github.com/Jawad606" rel="noreferrer" target={'_blank'} >
                      <FontAwesomeIcon
                        className="icon-s mx-1"
                        icon={faGithub}
                      /></a>
                      <a href="https://www.linkedin.com/in/jawad-mirza-208024207/" rel="noreferrer" target={'_blank'}>
                      <FontAwesomeIcon
                        className="icon-s mx-1"
                        icon={faLinkedin}
                      />
                      </a>
                      <a href="https://www.instagram.com/cod_x_dev/" rel="noreferrer" target={'_blank'}>
                      <FontAwesomeIcon
                        className="icon-s mx-1"
                        icon={faInstagram}
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12  my-2 ">
            <div className="box-con">
              {" "}
              <div className="row ">
                <div className="col-md-2 d-flex justify-content-md-end justify-content-center">
                  <div className="icon-con d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon size="1x" icon={faMessage} />
                  </div>
                </div>
                <div className="col-md-10 text-md-start text-center my-1">
                  <div>
                    <h4>Email Me</h4>
                  </div>
                  <div>
                    {" "}
                    <p>jawadmirza606@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12  my-2">
            <div className="box-con">
              {" "}
              <div className="row ">
                <div className="col-md-2 d-flex justify-content-md-end justify-content-center">
                  <div className="icon-con d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon size="1x" icon={faPhone} />
                  </div>
                </div>
                <div className="col-md-10 text-md-start text-center my-1">
                  <div>
                    <h4>Call Me</h4>
                  </div>
                  <div>
                    {" "}
                    <p>+92 3117157002</p>
                  </div>
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
function Contect() {
  return (
    <div className="e-header">
      <NavBar />
      <div className="py-5 px-4  ">
        <div className="about">
          <RenderContect />
          <RenderForm />
        </div>
      </div>
    </div>
  );
}

export default Contect;
