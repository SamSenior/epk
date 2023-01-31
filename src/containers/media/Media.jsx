import React from "react";
import vrImage from "../../assets/vr.jpg";
import "./media.css";

const Roadmap = () => (
  <div className="roadmap section__padding" id="roadmap">
    <div className="roadmap-image">
      <img src={vrImage} alt="vr" />
    </div>
    <div className="roadmap-content">
      <h1 className="gradient__text">Media</h1>
      <h4>
      Sammy has released music on many labels, but he has mostly given his music away as free downloads. Although he now predominantly produces bass house and drum and bass, over the last decade Sammy has put his brand on many genres including funky breaks, glitch-hop, hip-hop, jungle, ragga, dub, swing and more, often colaborating with artists from around the world. Recently his track "Setting It Off" was featured in the Netflix movie "The Sleepover"
      </h4>
      <p>
        Listen to the latest music from Sammy Senior
      </p>
     
    </div>
  </div>
);

export default Roadmap;
