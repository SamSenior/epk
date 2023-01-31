import React from "react";
import {
  
  Media,
  Bookings,
  Bio,
  Video
} from "./containers";
import { Join, Links } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      
      <Bio />
    </div>

    <Bookings />
    
    <div className="gradient__bg">
    <Media />
    </div>

    <Join />

    <Video />
    <div className="gradient__bg_2">
      <Links />
    </div>
   
  </div>
);

export default App;
