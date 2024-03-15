import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import your CSS file

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        }
        else{
          alert("error");
        }
      })
      .then((err) => console.log(err));
  };
  return (
    <div className="login-container">
      <h1 className="login-heading">Register</h1>
      <form action="/register" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-form-label"  htmlFor="userName">Username</label>
          <input className="login-form-input"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label className="login-form-label"  htmlFor="email">Email</label>
          <input
          className="login-form-input"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            id="Email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <label className="login-form-label"  htmlFor="Password">Password</label>
          <input
          className="login-form-input"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Register
        </button>
        <Link to="/login">
          <h4 className="signin-page">Already Registered (sign in)</h4>
        </Link>
      </form>
    </div>
  );
};

export default Register;
