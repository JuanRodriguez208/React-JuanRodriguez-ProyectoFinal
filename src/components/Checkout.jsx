import React, { useState } from 'react';
import Form from './Form'; // Importamos el formulario

const Checkout = () => {
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const handleProceedToPayment = () => {
    setShowForm(true); // Muestra el formulario al hacer clic
  };

  return (
    <div className="checkout-container">
      <h1>Resumen de la Compra</h1>
      {/* Aquí puedes agregar el resumen de los productos que están en el carrito */}

      {/* Botón para proceder con el pago */}
      <button onClick={handleProceedToPayment} className="proceed-button">
        Proceder al Pago
      </button>

      {/* Mostrar el formulario si el estado showForm es true */}
      {showForm && <Form />}
    </div>
  );
};

export default Checkout;
