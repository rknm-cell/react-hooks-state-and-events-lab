import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  }

  return (
    <li className={isAdded? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isAdded? 'remove' : 'add'} 
        onClick={handleClick}>{isAdded? "Remove from cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;