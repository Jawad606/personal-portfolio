import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../style/Portfolio.css";
import { works } from "./Gallery";
import "font-awesome/css/font-awesome.css";
import { faPlus,faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Gallery = () => {
  const [currentButton, setcurrentButton] = useState(0);
  const onButtonClicked = (id) => {
    setcurrentButton(currentButton === id ? null : id);
  };

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(works);
  }, []);
  useEffect(() => {
    setProjects([]);
    const filtered = works.map((p) => ({
      ...p,
      filtered: p.catagory.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <div className="container p-4">
      <div className="row">
        <div className="portfolio__labels  d-flex justify-content-center">
          <button
            active={filter === "all"}
            className={currentButton === 0 ? "blackButton" : "whiteButton"}
            onClick={() => {
              setFilter("all");
              onButtonClicked(0);
            }}
          >
            All
          </button>
          <button
            active={filter === "card"}
            className={currentButton === 1 ? "blackButton" : "whiteButton"}
            onClick={() => {
              setFilter("card");
              onButtonClicked(1);
            }}
          >
            App
          </button>
          <button
            active={filter === "app"}
            className={currentButton === 2 ? "blackButton" : "whiteButton"}
            onClick={() => {
              setFilter("app");
              onButtonClicked(2);
            }}
          >
            card
          </button>
          <button
            active={filter === "web"}
            className={currentButton === 3 ? "blackButton" : "whiteButton"}
            onClick={() => {
              setFilter("web");
              onButtonClicked(3);
            }}
          >
            web
          </button>
        </div>
      </div>

      <div className="portfolio__container row">
        {projects.map((item) =>
          item.filtered === true ? (
            <div className="main col-md-4 p-3 position-relative" key={item.id}>
              <img className="image" src={item.image} alt={item.id} />
              <div className="image-hover p-3">
                <h4>{item.name}</h4>
                <div className="icon-inner">
                  <FontAwesomeIcon icon={faPlus} />
                  <FontAwesomeIcon icon={faLink} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};
function RenderGallery() {
  return (
    <>
      <Gallery />
    </>
  );
}

function Portfolio() {
  return (
    <div>
      <NavBar />
      <div className="py-5 px-4  ">
        <div className="about">
          <RenderGallery />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
