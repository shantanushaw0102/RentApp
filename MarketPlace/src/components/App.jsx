import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./productpage/Products";
import Contact from "./Contact";
import Header from "./Header";
import Register from "./LoginFrom/Register";
import Login from "./LoginFrom/Login";
import AddProductFrom from "./AddProduct/AddProductFrom";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import SingleProduct from "./productpage/SingleProduct/SingleProduct";
import "../styles/globalstyle.css";

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/addproduct" element={<AddProductFrom />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
