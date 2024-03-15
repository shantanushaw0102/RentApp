import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          window.location.reload(true);
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form action="/login" method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-form-label" htmlFor="email">Email</label>
          <input className="login-form-input"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label className="login-form-label"  htmlFor="password">Password:</label>
          <input className="login-form-input"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
        <Link to="/register">
          <h4 className="signin-page">Not Registered </h4>
        </Link>
      </form>
    </div>
  );
};

export default Login;
