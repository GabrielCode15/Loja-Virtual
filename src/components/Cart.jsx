import React from 'react';
import '../index.css';

const Cart = ({ cart, removeFromCart, isOpen, onClose, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null; // Não renderiza a modal se não estiver aberta

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>Preço: €{item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="remove-button">
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="total-amount">
          <h3>Total: €{total.toFixed(2)}</h3>
        </div>
        <button className="checkout-button" onClick={onCheckout} disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
