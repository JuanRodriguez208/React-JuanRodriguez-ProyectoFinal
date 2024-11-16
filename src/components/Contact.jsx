import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>¡Contáctanos!</h1>
      <p>Si tienes alguna duda o consulta, no dudes en escribirnos.</p>
      
      <div className="contact-social">
        <p>Síguenos en nuestras redes sociales:</p>
        {/* Cambié de Link a un enlace <a> para redirigir correctamente a la URL externa */}
        <a 
          href="https://www.instagram.com/brownies.bry/?igsh=MWFpMmh0ZGdpb281ZA%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="../src/assets/instagram.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
