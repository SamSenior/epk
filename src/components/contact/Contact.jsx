import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m9krpsw",
        "template_du71fcc",
        form.current,
        "JzeUVYrPxFwunzRhr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
  
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
 
  );
};

export default Contact;


