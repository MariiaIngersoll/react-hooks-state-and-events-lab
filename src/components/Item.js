import React , { useState } from "react";

function Item({ name, category }) {
  const [isInTheCart, setIsInTheCart] = useState(false)
  const handleInTheCart = () => {
    setIsInTheCart(isInTheCart => !isInTheCart)
  }
  return (
    <li className={isInTheCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInTheCart ? "remove" : "add"} onClick={handleInTheCart}>{isInTheCart ? "Remove From cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
