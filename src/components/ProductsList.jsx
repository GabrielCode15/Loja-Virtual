import React, { useRef, useState } from 'react';
import '../index.css'; 

const ProductsList = ({ products, addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerScroll = 3;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerScroll);
    }
  };

  const scrollRight = () => {
    if (currentIndex + itemsPerScroll < products.length) {
      setCurrentIndex(currentIndex + itemsPerScroll);
    }
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerScroll);

  return (
    <div className="products-carousel">
      <h2>Lista de Produtos</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn left-btn" onClick={scrollLeft} disabled={currentIndex === 0}>‹</button>
        <div className="carousel-container">
          <ul className="carousel">
            {visibleProducts.map(product => (
              <li key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="img-product-carousel" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Preço: €{product.price.toFixed(2)}</p>
                <p className='stock-carousel'>Estoque: {product.stock > 0 ? product.stock : 'Indisponível'}</p>
                <button 
                  onClick={() => addToCart(product.id)} 
                  className="add-button"
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="carousel-btn right-btn" onClick={scrollRight} disabled={currentIndex + itemsPerScroll >= products.length}>›</button>
      </div>
    </div>
  );
};

export default ProductsList;
