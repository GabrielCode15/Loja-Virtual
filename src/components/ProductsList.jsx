// src/components/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import '../index.css'; // Consolidado em index.css

const ProductsList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Carrega os produtos do arquivo JSON
    setProducts(productsData);
  }, []);

  return (
    <div className="products-container">
      <h2>Lista de Produtos</h2>
      <ul>
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
  );
};

export default ProductsList;
