import React, { useState } from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { useTransition, animated } from "react-spring";

function CheckoutProduct({ id, img, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="checkout_product">
        <img className="checkout_image" src={img}></img>
        <div className="checkout_info">
          <p className="checout_title">{title}</p>
          <p className="checkout_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>

          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
