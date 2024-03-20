import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BrandImage from "./BrandImage";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";

import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:5000/logout")
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <BrandImage />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              {auth ? (
                (<li>
                  <NavLink to="/addproduct">Add Product</NavLink>
                </li>)
              ) : (
                <li>
                  <NavLink to = "/rentout">Rent Out</NavLink>
                </li>
              )}
            </li>

            <li>
              {auth ? (
                <li className="admin">
                  <span>
                    <FaUserCircle className="admin-icon" />
                  </span>
                  <span className="admin-name">{name}</span>
                  <NavLink onClick={handleDelete}>
                    <RiLogoutCircleRLine
                      className="logout-icon"
                      title="logout"
                    />
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
