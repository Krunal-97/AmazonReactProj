import React, { forwardRef } from "react";
import "../../styles/Checkout.css";
import Subtotal from "../Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_ad">
          <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2019/img/Consumer_Electronics/XCM_Manual_1157235_outlet_header_evergreen_1500x200_Consumer_Electronics_1157235_ca_consumer_electronics_outletheaderevergreen_1500x200_1547469927_jpg.jpg"></img>
        </div>
        <div className="checkout_title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>

          <>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
