import React from "react";

import "./Footer.css";

import fb from "../icons/fb.png";
import insta from "../icons/insta.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
const Footer = () => {
  return (
    <footer>
      <ul className="footer__social-media">
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
      <p> &copy; Designed and Developed by Sarwan Nizamani </p>
    </footer>
  );
};

export default Footer;
