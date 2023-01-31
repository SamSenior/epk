import React from "react";
import { link, youtube, twitter, github, discord } from "./imports";
import "./links.css";

const Brand = () => (
  <div className="brand section__padding">
    <div>
      <a href="https://linkedin.com/in/paytonkaleiwahea" target="_blank" rel="noreferrer">
        <img src={link} alt="link" />
      </a>
    </div>
    <div>
      <a href="https://youtube.com/PaytonKaleiwahea" target="_blank" rel="noreferrer">
        <img src={youtube} alt="youtube" />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/WolvesDAO" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
    <div>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
    </div>
    <div>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <img src={discord} alt="discord" className="discord" />
      </a>
    </div>
  </div>
);

export default Brand;
