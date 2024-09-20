import React, { useState, useEffect } from 'react';
import ProductsList from './components/ProductsList.jsx';
import Cart from './components/Cart.jsx';
import productsData from './data/products.json';
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Inicializa os produtos com dados do JSON
    setProducts(productsData);
  }, []);

  const addToCart = (productId) => {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1 && products[productIndex].stock > 0) {
      const updatedProducts = [...products];
      updatedProducts[productIndex].stock -= 1;
      setProducts(updatedProducts);

      setCart([...cart, updatedProducts[productIndex]]);
    }
  };

  const removeFromCart = (index) => {
    const product = cart[index];
    const updatedCart = cart.filter((_, i) => i !== index);

    // Atualiza o estoque ao remover do carrinho
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        return { ...p, stock: p.stock + 1 };
      }
      return p;
    });

    setProducts(updatedProducts);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Implementar lógica de checkout aqui
    alert('Checkout realizado com sucesso!');
    setCart([]);
    setIsCartOpen(false);
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
          <button className="open-cart-button" onClick={() => setIsCartOpen(true)}>
            🛒 Carrinho ({cart.length})
          </button>
        </nav>
      </header>

      <h1>Bem-vindo à Mini Loja Virtual!</h1>

      <div className="content-wrapper">
        <div className="main-content">
          {/* Carrossel de Produtos */}
          <ProductsList products={products} addToCart={addToCart} />

          {/* Grade de Produtos */}
          <div className='grid-Content'>
            {products.map(product => (
              <div key={product.id} className="grid-product">
                <div className="img-content">
                  <img src={product.image} alt={product.name} className='img-product' />
                </div>
                <p className='preco'>€{product.price.toFixed(2)}</p>
                <p className='description'>{product.description}</p>
                <p className='stock'>Estoque: {product.stock > 0 ? product.stock : 'Indisponível'}</p>
                <button 
                  className='add-product' 
                  onClick={() => addToCart(product.id)} 
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrinho de Compras Modal */}
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={handleCheckout}
      />

      {/* Rodapé */}
      <footer>
        <p>Mini Loja Virtual © 2024 - Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default App;
