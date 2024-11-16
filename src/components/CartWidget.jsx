import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import { useCart } from "./CartContext"; // Accedemos al carrito global

const CartWidget = () => {
  const { getItemCount } = useCart(); // Obtenemos la cantidad de ítems en el carrito
  const itemCount = getItemCount();

  return (
    <div className="cart-widget">
      <Link to="/cart"> {/* Enlazamos el carrito al ícono */}
        <FaShoppingCart />
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>} {/* Muestra la cantidad de productos */}
      </Link>
    </div>
  );
};

export default CartWidget;