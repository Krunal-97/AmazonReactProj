import React from "react";
import "../styles/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, img }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img className="product_image" src={img} />

      <button onClick={addToBasket} className="product_button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
