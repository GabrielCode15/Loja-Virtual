// src/components/ProductsList.jsx
import React, { useEffect, useState, useRef } from 'react';
import productsData from '../data/products.json';
import '../index.css'; 

const ProductsList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="products-carousel">
      <h2 style={{textAlign:"left"}}>Produtos em destaque</h2>
      <button className="carousel-btn left-btn" onClick={scrollLeft}>‹</button>
      <div className="carousel-container" ref={carouselRef}>
        <ul className="carousel">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Preço: {product.price.toFixed(2)} Euros</p>
              <button onClick={() => addToCart(product)} className="add-button">
                Adicionar ao Carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="carousel-btn right-btn" onClick={scrollRight}>›</button>
    </div>
  );
};

export default ProductsList;

