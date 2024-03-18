/* Sql query for the login table */

CREATE TABLE login (
    id serial primary key,
    name varchar(100),
    email varchar(100),
    password varchar(100)
);


/* sql query for the products */

CREATE TABLE product_data(
    id serial primary key,
    category varchar(50),
    product_name varchar(50),
    type varchar(50),
    brand varchar(50),
    model varchar(50),
    seller varchar(50),
    location varchar(50),
    year varchar(10),
    price varchar(20),
    description text,
    reviews varchar(50),
    comments text,
    image varchar(100)
);


  <RentItems
            key={index}
            category={item.p_category}
            name={item.p_name}
            type={item.p_type}
            brand={item.p_brand}
            model = {item.p_model}
            seller = {item.p_seller}
            location = {item.p_location}
            year ={item.p_year}
            price ={item.p_price}
            desc = {item.p_description}
            review = {item.p_reviews}
            comments = {item.p_comments}
            img={`http://localhost:5000/images/${item.p_image}`}
          />