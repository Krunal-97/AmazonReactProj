import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "../../styles/Payment.css";
import CheckoutProduct from "../CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className="payment">
      <div className="payment_container">
        <h2 className="checkout_container">Checkout({basket?.length} items)</h2>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
            <h4>{user?.email}</h4>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
