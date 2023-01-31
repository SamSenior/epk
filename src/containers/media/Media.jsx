import React from "react";
import vrImage from "../../assets/scour.jpg";
import "./media.css";

const Media = () => (
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
      <div className="music_links">
        <div>
      <a
   target="_blank"
   rel="noreferrer"
   href='https://www.sammysenior.bandcamp.com'>
        Bandcamp
</a>
</div>
<div>
  <a
   target="_blank"
   rel="noreferrer"
   href='https://soundcloud.com/sammysenior'>
        Soundcloud
</a>
</div>
<div>
      <a
   target="_blank"
   rel="noreferrer"
   href='https://open.spotify.com/artist/4853sVG5aP9LGiakNXd1bp'>
        Spotify
</a>
</div>
<div>
  <a
   target="_blank"
   rel="noreferrer"
   href='https://www.instagram.com/sammysenior/'>
        Instagram
</a>
</div>



</div>
     
    </div>
  </div>
);

export default Media;
