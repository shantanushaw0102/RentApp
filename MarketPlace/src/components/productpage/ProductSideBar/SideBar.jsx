import React from "react";
import "./SideBar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";

const SideBar = ({handleChange}) => {
  return (
    <section className="sidebar">
      <div className="sidebar-con">
        <Category handleChange = {handleChange}/>
        {/* <Price handleChange = {handleChange}/> */}
      </div>
    </section>
  );
};

export default SideBar;
