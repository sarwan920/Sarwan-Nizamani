import React from "react";
import { Fade } from "react-reveal";

import "./Projects.css";

import TradeApp from "../project videos/trades-app.gif";
import une from "../project videos/une.gif";

const projects = [
  {
    id: "p1",
    name: "TRADE APP",
    description: "Application where you can manage your crypto records.",
    technologies: ["ReactJs", "Hasura", "Apollo GraphQL", "Chakra UI"],
    links: ["https://github.com", "www.google.com"],
    image: TradeApp,
  },
  {
    id: "p2",
    name: "UN Enterprises",
    description: "Construction company website",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: ["https://github.com", "www.google.com"],
    image: une,
  },
  
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="work">
        <div className="heading">
          <Fade bottom>
            <h1>My Projects</h1>
          </Fade>
        </div>
        <div className="work__boxes">
          {projects.map((project) => (
            <div className="work__box">
              <Fade left>
                <div className="work__text">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="work__list">
                    {project.technologies.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>

                  <div className="work__links"></div>
                </div>
              </Fade>

              <Fade right>
                <div className="work__image-box">
                  <img src={project.image} alt="trades" />
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
