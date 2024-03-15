import React from "react";
import "./UserContact.css";
const UserContact = () => {
  return (
    <>
      
      <form
        className="cf-container"
        action="https://formspree.io/f/mleyzlwl"
        method="POST"
      >
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
        </div>
        <div className=" message half right cf">
          <textarea
             name="Message"
              placeholder="Enter your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="cf-submit" />
      </form>
    </>
  );
};

export default UserContact;
