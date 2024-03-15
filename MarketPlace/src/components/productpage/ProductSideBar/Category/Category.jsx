import React from "react";
import "./Category.css";
import Input from "../../ProductComponents/Input.";
const Category = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Input handleChange={handleChange}
            value="bike"
            title="Bikes"
            name="test"
          />
          <Input handleChange={handleChange}
            value="Car"
            title="Cars"
            name="test"
          />
          <Input handleChange={handleChange}
            value="furniture"
            title="Furniture"
            name="test"
          />
          <Input handleChange={handleChange}
            value="farming"
            title="Farming"
            name="test"
          />
          <Input handleChange={handleChange}
            value="electronics"
            title="Electronics"
            name="test"
          />
          <Input handleChange={handleChange}
            value="Property"
            title="Property"
            name="test"
          />
          <Input handleChange={handleChange}
            value="Gym instruments"
            title="Gym instruments"
            name="test"
          />
          <Input handleChange={handleChange}
            value="musical instruments"
            title="musical instruments"
            name="test"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
