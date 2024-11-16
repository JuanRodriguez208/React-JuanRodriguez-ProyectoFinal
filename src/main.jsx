import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './components/CartContext'; // Importa el CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
