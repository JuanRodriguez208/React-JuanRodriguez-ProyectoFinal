import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Asegúrate de importar el hook useCart

// Componente para cada brownie individual
const ProductItem = ({ brownie }) => {
  const { addItem } = useCart(); // Accedemos a la función para agregar ítems al carrito
  const quantityInputRef = React.useRef(null); // Creamos una referencia para el input de cantidad

  // Función que se llama cuando se agrega el brownie al carrito
  const handleAddToCart = () => {
    const quantity = parseInt(quantityInputRef.current.value); // Obtenemos la cantidad desde el input
    addItem(brownie, quantity); // Agregamos el brownie al carrito
    console.log(`${brownie.name} agregado al carrito`);

    // Resetear la cantidad del input a 1 después de agregarlo al carrito
    quantityInputRef.current.value = 1;
  };

  return (
    <div className="brownie-item">
      <img src={brownie.image} alt={brownie.name} />
      <h2>{brownie.name}</h2>
      <p>{brownie.description}</p>
      <p><strong>Precio:</strong> ${brownie.price}</p>
      {/* Ya no mostramos ingredientes ni calorías en el listado */}
      <input 
        type="number" 
        min="1" 
        defaultValue="1" 
        ref={quantityInputRef} // Asignamos la ref para acceder al input
      />
      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
      {/* Enlace 'Detalles del Producto' dentro de la caja */}
      <Link to={`/item/${brownie.id}`} className="details-button">Detalles del Producto</Link>
    </div>
  );
};

const SpecialBrownies = () => {
  const specialBrownies = [
    { 
      id: 7, 
      name: 'Brownie Gourmet', 
      price: 10, 
      description: 'Brownie gourmet con ingredientes premium', 
      image: '../src/assets/brownie-gourmet.jpg',
      ingredients: ['Harina', 'Chocolate oscuro', 'Almendras', 'Manteca'],
      calories: 300
    },
    { 
      id: 8, 
      name: 'Brownie de Matcha', 
      price: 9, 
      description: 'Brownie de matcha suave y cremoso', 
      image: '../src/assets/brownie-matcha.jpg',
      ingredients: ['Harina', 'Matcha', 'Manteca', 'Azúcar'],
      calories: 280
    },
    { 
      id: 9, 
      name: 'Brownie de Nutella', 
      price: 11, 
      description: 'Brownie relleno de Nutella', 
      image: '../src/assets/brownie-nutella.jfif',
      ingredients: ['Harina', 'Nutella', 'Manteca', 'Azúcar'],
      calories: 350
    },
  ];

  return (
    <div className="special-brownies">
      <h1>Brownies Especiales</h1>
      <div className="brownie-list">
        {specialBrownies.map(brownie => (
          <ProductItem key={brownie.id} brownie={brownie} /> // Ya no agregamos el enlace aquí, solo dentro de ProductItem
        ))}
      </div>
    </div>
  );
};

export default SpecialBrownies;
