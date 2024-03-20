import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ChatForm = () => {
  const form = useRef();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_0s2xjvi";
    const templateId = "template_peis31l";
    const publicKey = "OWztFEA4O6Nc_6X5X";

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
      <div className="chatform-container chat-form">
        <form className="chatform-form" ref={form} onSubmit={sendEmail}>
          <div className="chatform-inputs">
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
            <textarea
              name="message"
              placeholder="Enter your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Submit" className="chatform-submit" />
          </div>
        </form>
      </div>
      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default ChatForm;
