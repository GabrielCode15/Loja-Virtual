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

      <div className='grid-Content'>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>
        <div className="grid-product">
            <div className="img-content"><img src="" alt="imagem_produto" className='img-product' /></div>
            <p className='preco'>19,99</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, ipsam veritatis assumenda harum repellendus provident consequatur odio, libero, temporibus rem.</p>
            <button className='add-product'>Adicionar ao Carrinho</button>
        </div>

      </div>

      {/* Rodapé */}
      <footer>
        <p>Mini Loja Virtual © 2024 - Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default App;

