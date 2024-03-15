import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RentItems, NewArrivedItems } from "./CarouselCard";
import ProductItem from "../database/ProductItem";
import "../styles/carousel.css";

function CarouselElement() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const mostRented = ProductItem.filter((item) => item.most === true);
  const rentProduct = mostRented.map((item) => (
    <RentItems
      key={item.id}
      id={item.id}
      img={item.imgUrl1}
      name={item.name}
      rentPrice={item.price}
      desc={item.desc}
    />
  ));
  const newArrival = ProductItem.filter((item) => item.fresh === true);
  const newProduct = newArrival.map((item) => (
    <NewArrivedItems
      key={item.id}
      id={item.id}
      img={item.imgUrl1}
      name={item.name}
      rentPrice={item.price}
      desc={item.desc}
    />
  ));
  return (
    <>
      <div className="carousel-container rent">
        <h1 className="carousel-heading ">
          <span>Most Rented</span>
        </h1>
        <Carousel
          showDots={true}
          responsive={responsive}
          autoPlay={true}
          rewind={true}
          autoPlaySpeed={3000}
        >
          {rentProduct}
        </Carousel>
      </div>

      <div className="carousel-container newArrival">
        <h1 className="carousel-heading">
          <span>Fresh Arrivals</span>
        </h1>
        <Carousel
          showDots={true}
          responsive={responsive}
          autoPlay={true}
          rewind={true}
          autoPlaySpeed={3000}
        >
          {newProduct}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselElement;
