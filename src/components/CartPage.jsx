// src/components/CartPage.jsx
import React from "react";
import { useCart } from "./CartContext";  // Usamos el contexto del carrito
import Swal from "sweetalert2";  // Importamos SweetAlert para las notificaciones

const CartPage = () => {
  const { cart, removeItem, clearCart } = useCart();

  // Función para eliminar un producto del carrito
  const handleRemove = (id) => {
    removeItem(id);
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: 'El producto se ha eliminado correctamente.',
    });
  };

  // Mostrar un mensaje si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: 'auto' }} />
            {item.name} - {item.quantity} unidades
            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default CartPage;
