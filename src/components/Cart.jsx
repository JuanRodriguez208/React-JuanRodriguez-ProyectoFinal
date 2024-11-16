import React from "react";
import { useCart } from "./CartContext"; // Importamos el hook para acceder al carrito
import { Link } from "react-router-dom"; // Para redirigir a otras páginas

const Cart = () => {
  const { cart, removeItem, clear, getTotal } = useCart(); // Accedemos al carrito y sus funciones

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="back-to-shop">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito de compras</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${getTotal()}</h3>
      </div>

      {/* Aquí agregamos un contenedor para los botones de acción */}
      <div className="cart-actions">
        <button onClick={clear} className="clear-cart-button">Vaciar carrito</button>
        <Link to="/checkout" className="checkout-button">Proceder al pago</Link>
      </div>
    </div>
  );
};

export default Cart;
