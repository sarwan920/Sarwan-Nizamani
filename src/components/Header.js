import React  from "react";

import "./Header.css";
const Header = () => {


  return (
    <header id="head">
      <h1
        style={{
         fontFamily:'IM Fell English SC',
          letterSpacing: "5px",
          color: "#FFFFFFFF",
        }}
      >
       
        Sarwan
      </h1>
      <nav>
        <ul
        className="nav__list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
