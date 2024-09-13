// src/App.jsx
import React, { useState } from 'react';
import ProductsList from './components/ProductsList.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Mini Loja Virtual</h1>
      <div className="main-content">
        <ProductsList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
