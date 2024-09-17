// src/App.jsx
import React, { useState } from 'react';
import ProductsList from './components/ProductsList.jsx';
import Cart from './components/Cart.jsx';
import './index.css';

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
      {/* Cabeçalho com Logo e Menu */}
      <header>
        <nav>
          <div className="logo">Mini Loja</div>
          <ul className="menu">
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>

      <h1>Bem-vindo à Mini Loja Virtual!</h1>

      <div className="main-content">
        <ProductsList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

      {/* Rodapé */}
      <footer>
        <p>Mini Loja Virtual © 2024 - Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default App;

