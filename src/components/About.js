import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="heading">
          <Fade bottom>
            <h1>About</h1>
          </Fade>
        </div>

        <div className="about__content">
          <Fade left>
            <div className="about__text">
              <p>
                I am Front End Developer, who loves to code. Having experience in Designing
                and Developing multiple websites using different FrontEnd technologies.
                Currently, working with ReactJS with Hasura&#40;GraphQL&#41;,
                I am a person who loves to exploer new things I am going for new path of Full Stack Developer.
              </p>
            </div>
          </Fade>

          <Fade right cascade>
            <div className="about__skills">
              <button className="button">HTML5</button>
              <button className="button">CSS</button>
              <button className="button">JavaScript ES5/ES6+</button>
              <button className="button">ReactJS</button>
              <button className="button">VueJS</button>
              <button className="button">Rest API</button>
              <button className="button">Firebase</button>
              <button className="button">NodeJs</button>
              <button className="button">Hasura</button>
              <button className="button">Apollo GraphQL</button>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
