import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../style/Portfolio.css";
import { works } from "./Gallery";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "font-awesome/css/font-awesome.css";

import { FaEye, FaLink } from "react-icons/fa";
const Gallery = () => {
  const [onclickid, setonclickid] = useState(null);
  const [Modle, setModle] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggle = () => {
    setModle(!Modle);
  };
  useEffect(() => {
    setProjects(works);
  }, []);
  return (
    <div className="container p-4">
      <div className="portfolio__container row">
        {works.map((item) => (
          <div className="main col-md-4 p-3 position-relative" key={item.id}>
            <img className="image" src={item.image} alt={item.id} />
            <div className="image-hover p-3">
              <h4>{item.name}</h4>
              <div className="icon-inner">
                <button
                  onClick={() => {
                    setModle(!Modle);
                    setonclickid(item.id);
                  }}
                >
                  <FaEye className="fa-plus" />{" "}
                </button>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {" "}
                  <FaLink className="fa-plus" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Modal isOpen={Modle} toggle={toggle} className="modal-dialog-centered">
          {projects.map((item) =>
            item.id === onclickid ? (
              <div>
                <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
                <ModalBody>
                  <img className="image-model" src={item.image} alt={item.id} />
                </ModalBody>
              </div>
            ) : (
              ""
            )
          )}
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

function RenderGallery() {
  return (
    <>
      asdfsdf
      <Gallery />
    </>
  );
}

function Portfolio() {
  return (
    <div className="e-header">
      <NavBar />
      <div className="py-5 px-4">
        <div className="about">
          <RenderGallery />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
