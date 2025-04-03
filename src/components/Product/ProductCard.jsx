import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
function ProductCard({ product }) {
  const { title, price, category, image, rating } = product;

  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt={category} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* rating count */}
          <small>{rating.count}</small>
        </div>
      </div>
      <div className={classes.price}>
        <CurrencyFormat amount={price} />
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
}

export default ProductCard;
