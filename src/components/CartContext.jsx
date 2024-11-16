import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto del carrito
const CartContext = createContext();

// Componente que envuelve la aplicación para compartir el estado global del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar una unidad de un producto del carrito
  const removeItem = (id) => {
    setCart(cart.map(item => 
      item.id === id 
        ? item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } // Si la cantidad es mayor a 1, restamos 1
          : null // Si la cantidad es 1, eliminamos el producto (ponemos null)
        : item
    ).filter(item => item !== null)); // Filtramos los null (productos que deben eliminarse)
  };

  // Limpiar todo el carrito
  const clear = () => {
    setCart([]);
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Obtener la cantidad total de productos en el carrito
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el carrito en cualquier parte de la aplicación
export const useCart = () => useContext(CartContext);
