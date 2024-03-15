import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const BrandImage = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default BrandImage;
