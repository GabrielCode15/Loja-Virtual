import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Preço: Euros{item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(index)} className="remove-button">
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Euros{total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
