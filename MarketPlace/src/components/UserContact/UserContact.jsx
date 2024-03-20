import React, { useRef, useState } from "react";
import "./UserContact.css";
import emailjs from "@emailjs/browser";

const UserContact = () => {
  const form = useRef();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_t1xtaeu";
    const templateId = "template_dif6vtd";
    const publicKey = "v252pa6wq8Jz9WdXo";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessageVisible(true);
          setTimeout(() => {
            setSuccessMessageVisible(false);
          }, 5000); // Hide the success message after 5 seconds
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form className="cf-container" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="phone.No"
            autoComplete="off"
            required
          />
        </div>
        <div className=" message half right cf">
          <textarea
            name="message"
            placeholder="Enter your Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="cf-submit" />
      </form>

      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default UserContact;
