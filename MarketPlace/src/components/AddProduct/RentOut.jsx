import React, { useRef, useState } from "react";
import "./RentOut.css";
import emailjs from "@emailjs/browser";

const RentOut = () => {
  const form = useRef();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_t1xtaeu";
    const templateId = "template_bub7x4e";
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
      <div className="ro-outer-container">
        <div className="ro-container">
         
            <div className="ro-heading">
              <h1>RentOut your Product</h1>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
            <div className="ro-username">
              <label htmlFor="name" className="ro-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                className="ro-input"
                required
              />
            </div>
            <div className="ro-email">
              <label htmlFor="email" className="ro-label">
                Email Id
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="ro-input"
                required
              />
            </div>

            <div className="ro-phone">
              <label htmlFor="phone" className="ro-label">
                phone no.
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your email"
                className="ro-input"
                required
              />
            </div>

            <div className="ro-category">
              <label htmlFor="category" className="ro-label">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter Category name"
                className="ro-input"
              />
            </div>
            <div className="ro-pname">
              <label htmlFor="productName" className="ro-label">
                Product Name
              </label>
              <input
                type="text"
                name="productname"
                placeholder="Enter Product name"
                className="ro-input"
              />
            </div>

            <div className="ro-type">
              <label htmlFor="type" className="ro-label">
                Product Type
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter Product type"
                className="ro-input"
              />
            </div>
            <div className="ro-brand">
              <label htmlFor="brand" className="ro-label">
                Product Brand
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand name"
                className="ro-input"
              />
            </div>
            <div className="ro-model">
              <label htmlFor="model" className="ro-label">
                Product Model
              </label>
              <input
                type="text"
                name="model"
                placeholder="Enter model name"
                className="ro-input"
              />
            </div>

            <div className="ro-location">
              <label htmlFor="location" className="ro-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                className="ro-input"
              />
            </div>
            <div className="ro-year">
              <label htmlFor="year" className="ro-label">
                Purchasing Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Enter Purchasing year"
                className="ro-input"
              />
            </div>
            <div className="ro-price">
              <label htmlFor="price" className="ro-label">
                Rent Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter rent price"
                className="ro-input"
              />
            </div>
            <div className="ro-description">
              <label htmlFor="description" className="ro-label">
                Product Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Product description"
                className="ro-input"
              />
            </div>

            <div className="ro-image">
              <label htmlFor="uploadimage" className="ro-label">
                Upload Image
              </label>
              <input type="file" name="uploadimage" className="ro-file-input" />
            </div>
            <div className="ro-button">
              <button className="apf-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {successMessageVisible && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </>
  );
};

export default RentOut;
