import React from "react";
import Feature from "../../components/feature/Feature";
import "./bookings.css";
import fro from '../../assets/fro.jpeg';

const About = () => (
  <div className="about section__margin" id="about">
    <div className="about-heading">
      <h1 className="gradient__text">
      Now residing in his home country of New Zealand, Sammy is still passionate about travel and has plans to return to the festival scene in North America and Europe. He is currently taking bookings for summer in Canada 2023.

      </h1>
      <div className="header-image">
      <img src={fro} alt="ai" />
    </div>
    </div>
    <div className="about-container">
      <Feature
        title="Bookings"
        text="Please get in touch at sammynz@gmail.com"
      />
     
    </div>
  </div>
);

export default About;
