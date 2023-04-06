import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <h2 className="product-title">{name}</h2>
        <p>
          Price: <span className="orange-highlight">${price}</span>
        </p>
        <p>
          Shipping Charge:{" "}
          <span className="orange-highlight">${quantity * shipping}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrashAlt}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ReviewItem;
