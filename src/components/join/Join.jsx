import React from "react";
import "./join.css";
import { Modal } from "../"

const Join = () => (
  <div className="join">
    <div className="join-content">
      <p></p>
      <h3>
        Do you have a question or a booking enquiry for Sammy Senior? fill out this form to send a message to him directly
      </h3>
    </div>
    <div className="join-btn">
       <Modal />
      {/* <button  type="button" >Get Started</button> */}
    </div>
  </div>
);

export default Join;
