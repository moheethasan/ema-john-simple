import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShippingCost += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + totalShippingCost + tax;
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShippingCost}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      {children}
    </div>
  );
};

export default Cart;
