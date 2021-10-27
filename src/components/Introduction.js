import React from "react";

import "./Introduction.css";
import PersonIcon from "../icons/sarwan.jpeg";

import fb from "../icons/fb.png";
import insta from "../icons/insta.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Introduction = () => {
  return (
    <main className="introduction_container">
      <div className="social__media">
        <ul className="social__media__list">
          <li style={{ listStyleType: "none" }}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/sarwan.nizamani/"
            >
              <img style={{ color: "white" }} alt="Facebook" src={fb} />
            </a>
          </li>
          <li style={{ listStyleType: "none" }}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/nizamani543/"
            >
              <img style={{ color: "white" }} alt="Instagram" src={insta} />
            </a>
          </li>
          <li style={{ listStyleType: "none" }}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/sarwan920"
            >
              <img style={{ color: "white" }} alt="Github" src={github} />
            </a>
          </li>
          <li style={{ listStyleType: "none" }}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/sarwan-nizamani-7b5a87b8/"
            >
              <img style={{ color: "white" }} alt="LinkedIn" src={linkedin} />
            </a>
          </li>
        </ul>
      </div>
      <div className="intro">
        <h1 style={{ letterSpacing: "5px" }}>I'm Sarwan Nizamani</h1>
        <h3 style={{ letterSpacing: "3px" }}>
          FrontEnd Developer | ReactJS | VueJS | Hasura{" "}
        </h3>
        <div className="box-3">
          <div className="btn btn-three">
            <span>CONTACT ME</span>
          </div>
        </div>
      </div>

      <div className="info">
        <img className="person__icon" alt="self" src={PersonIcon} />
      </div>
    </main>
  );
};

export default Introduction;
