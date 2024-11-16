import React, { useState } from 'react';

const Form = () => {
  // Estado para los datos del formulario
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Pago procesado con éxito!');
    // Aquí podrías integrar una pasarela de pago real
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Formulario de Pago</h2>
      
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Dirección de Envío:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Número de Tarjeta:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Realizar el Pago</button>
    </form>
  );
};

export default Form;
