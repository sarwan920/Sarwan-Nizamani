import React, { useState } from "react";

import "./Header.css";

import { HamburgerButton } from "react-hamburger-button";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <>
      <header id="head">
        <h1
          style={{
            fontFamily: "IM Fell English SC",
            letterSpacing: "5px",
            color: "#FFFFFFFF",
          }}
          className="heading"
        >
          Sarwan
        </h1>
        <span className="hamburger">
          <HamburgerButton
            open={toggle}
            onClick={toggler}
            width={35}
            height={25}
            strokeWidth={1}
            color="white"
            animationDuration={0.5}
          />
        </span>

        <nav>
          <ul className="nav__list">
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
      {/* 
      {toggle && (
        <div id="mySidenav" className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      )} */}
    </>
  );
};

export default Header;
