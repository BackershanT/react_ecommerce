import React, { useState } from "react";
import { categories, products } from "../../data/categorydata";
import ProductCard from "../CategorySection/productCard/ProductCard";
import "./CategorySection.css";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [modalProduct, setModalProduct] = useState(null); 


  const selectedProducts = products[selectedCategory] || [];

  return (
    <div className="categories-wrapper">
      <h2>
        Shop From <span className="highlight">Top Categories</span>
      </h2>

      <div className="category-list">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-item ${selectedCategory === cat.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <div
        className="product-list"
        style={{
          maxHeight: selectedProducts.length > 10 ? "400px" : "auto",
          overflowY: selectedProducts.length > 10 ? "auto" : "visible",
        }}
      >
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <ProductCard key={product.id} product={product}
            onExpand={()=>setModalProduct(product)} />
          ))
        ) : (
          <p className="no-products">
            No products listed for <strong>{selectedCategory}</strong>.
          </p>
        )}
      </div>
      
        {/* Modal */}
        {modalProduct && (
  <div className="modal-overlay" onClick={() => setModalProduct(null)}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // prevent closing on inside click
    >
      <button className="modal-close" onClick={() => setModalProduct(null)}>×</button>
      <img src={modalProduct.image} alt={modalProduct.name} className="modal-image" />
      <h2>{modalProduct.name}</h2>
      <p><strong>Price:</strong> ${modalProduct.price}</p>
      <p><strong>Description:</strong> {modalProduct.description || "No description provided."}</p>

      <div className="modal-buttons">
        <button className="btn-cart">🛒 Add to Cart</button>
        <button className="btn-fav">♥ Add to Favourites</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Categories;
