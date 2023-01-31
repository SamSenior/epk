import React from 'react';
import ai from '../../assets/ai.png';
import './bio.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">BIO</h1>
      <p>

Sammy Senior made his first appearance on the music scene 10 years ago at Boomtown Festival in the UK, quickly being recognised for his early production of funky breaks music by UK labels such as Ghetto Funk and Scour Records. Since then, he has gone on to perform at dozens of clubs and festivals, sharing the stage with some of the biggest names in the bass music scene throughout the UK, Europe, North America and Pacific, touring regularly in Canada and headlining festivals such as Emotion and Fozzyfest. Known for playing high energy sets that span a vast array of bass music genres, Sammy provides crowds with a unique experience that is certain to include scratching, beat juggling, and what can only be described as live remixing, as he pushes his skills and equipment's features to their limits. 
 </p>

     

      <div className="header-content__people">
      
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
