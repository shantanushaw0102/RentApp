import React from "react";
import "./Price.css";
import Input from "../../ProductComponents/Input.";

const Price = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input 
        handleChange={handleChange}
        value={400}
        title="₹100 - ₹500"
        name = "test2"
      />
     <Input 
        handleChange={handleChange}
        value={501}
        title="₹501 - ₹1500"
        name = "test2"
      />
        <Input 
        handleChange={handleChange}
        value={1501}
        title="₹1501 - ₹3000"
        name = "test2"
      />
        <Input 
        handleChange={handleChange}
        value={3001}
        title="₹3001 - ₹5000"
        name = "test2"
      />
        <Input 
        handleChange={handleChange}
        value={5001}
        title="₹5001 - ₹7000"
        name = "test2"
      />
        <Input 
        handleChange={handleChange}
        value={7001}
        title="₹7000 & up"
        name = "test2"
      />
    </div>
  );
};

export default Price;
