import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductItem from "../../../database/ProductItem";
import "./singleProduct.css";
import Button from "../../Button/Button";
import { FaBackward } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    // filter product by id
    const filterProduct = ProductItem.filter((item) => item.id == id);
    //console.log(filterProduct)
    setProduct(filterProduct[0]);

    //related product filter by category
    const filterCategory = ProductItem.filter(
      (item) => item.category === product.category
    );
    setRelatedProduct(filterCategory[0]);
    console.log(filterCategory);
  }, [id, product.category]);

  return (
    <>
      <div className="pm-container ">
        <h1 className="p-heading">
          <span>Product detail</span>
        </h1>
        <div className="product-container">
          <div className="product-img">
            <img src={product.imgUrl2} alt="" />
          </div>
          <div className="product-des">
            <h1 className="p-name">{product.name}</h1>

            <h3 className="p-brand">brand : {product.brand} </h3>
            <h4 className="p-model">model : {product.model}</h4>
            <h4 className="p-type">type : {product.type}</h4>
            <h4 className="p-year">year : {product.year}</h4>

            <p className="p-desc">
              <span>description :</span> {product.desc}
            </p>
            <p className="p-renter">
              <span>Renter : </span>
              {product.seller}
            </p>
            <h2 className="p-price">rent Price : {product.price} per day</h2>
            <Link to="/products">
            <FaBackward title="back to product" className="back-button"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
