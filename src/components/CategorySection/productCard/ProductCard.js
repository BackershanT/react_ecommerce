import React from "react";
import "./ProductCard.css";
import { FiHeart, FiShoppingCart,FiMaximize2 } from "react-icons/fi";


const ProductCard = ({ product ,onExpand}) => {

  return (
    <div className="product-card">
      <div className="product-icons">
        <button className="icon-button expand" onClick={onExpand}><FiMaximize2/>
          
        </button>
      </div>

      <img src={product.image} alt={product.name} className="product-image" />
      <button className="icon-button fav"><FiHeart/></button>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button className="icon-button-cart"> <FiShoppingCart style={{ marginRight: "5px" }} /></button>


     
    </div>
  );
};

export default ProductCard;
