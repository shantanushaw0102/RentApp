import React from "react";
import { Link } from "react-router-dom";
import BrandLogo1 from "../assets/BrandLogo1.png";

const BrandImage = () => {
  return (
    <div>
      <Link to="/">
        <img src={BrandLogo1} alt="" />
      </Link>
    </div>
  );
};

export default BrandImage;
