import React, { useState } from "react";
import ProductNav from "./ProductNavigation/ProductNav";
import ProductItem from "./ProductsItem/ProductItem";
import Recommended from "./Recommended/Recommended";
import SideBar from "./ProductSideBar/SideBar";
import products from "../../database/ProductItem";
import "./product.css";
import ProductCard from "./ProductComponents/ProductCard";


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.name.toLowerCase().indexOf(query.toLowerCase()) !==-1
  );
  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title, name, type }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected ||
          name === selected ||
          type === selected
      );
    }

    return filteredProducts.map(
      ({ id, imgUrl1, name, star, reviews, price ,brand , seller,type}) => (
        <ProductCard
          key={id}
          id={id}
          img={imgUrl1}
          name={name}
          star={star}
          reviews={reviews}
          price={price}
          brand={brand}
          seller={seller}
          type={type}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="main-product-container">
      <SideBar handleChange={handleChange} />
      <ProductNav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <ProductItem result={result} />
    </div>
  );
};

export default Products;
