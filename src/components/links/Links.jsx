import React from "react";
import { soundcloud, youtube, spotify, instagram, bandcamp } from "./imports";
import "./links.css";

const Links = () => (
  <div className="links section__padding">
    <div>
      <a href="https://open.spotify.com/artist/4853sVG5aP9LGiakNXd1bp" target="_blank" rel="noreferrer">
        <img src={spotify} alt="spotify"  className="discord" />
      </a>
    </div>
    <div>
      <a href="https://www.youtube.com/sammyseniorNZ" target="_blank" rel="noreferrer">
        <img src={youtube} alt="youtube"  className="discord" />
      </a>
    </div>
    <div>
      <a href="https://www.sammysenior.bandcamp.com" target="_blank" rel="noreferrer">
        <img src={bandcamp} alt="bandcamp"  className="discord" />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/sammysenior" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" className="discord" />
      </a>
    </div>
    <div>
      <a href="https://soundcloud.com/sammysenior" target="_blank" rel="noreferrer">
        <img src={soundcloud } alt="soundcloud"  className="discord" />
      </a>
    </div>
   
  </div>
);

export default Links;
