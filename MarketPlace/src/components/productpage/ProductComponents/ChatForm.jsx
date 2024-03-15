import React from "react";

const ChatForm = () => {
  return (
    <div
      className="chatform-container chat-form"
     
    >
      <form
        className="chatform-form"
        action="https://formspree.io/f/mleyzlwl"
        method="POST"
      >
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
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            type="tel"
            name="Phone number"
            placeholder="phone.No"
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
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
  );
};

export default ChatForm;
