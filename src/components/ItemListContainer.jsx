// src/components/ItemListContainer.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Importa el hook del carrito

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); 
  const [brownies, setBrownies] = useState([]);
  const { addItem } = useCart(); // Accedemos a la función para agregar ítems al carrito

  const allBrownies = [
    { id: 1, name: 'Brownie Clásico', price: 5, description: 'Delicioso brownie clásico', image: '../src/assets/brownie-clasico.webp', categoryId: '1' },
    { id: 2, name: 'Brownie de Chocolate Blanco', price: 6, description: 'Brownie con trozos de chocolate blanco', image: '../src/assets/brownie-blanco.webp', categoryId: '1' },
    { id: 3, name: 'Brownie con Nueces', price: 7, description: 'Brownie con nueces pecanas', image: '../src/assets/brownie-nuez.jfif', categoryId: '2' },
    { id: 4, name: 'Brownie de Café', price: 5.5, description: 'Brownie con sabor a café', image: '../src/assets/brownie-cafe.jpg', categoryId: '2' },
    { id: 5, name: 'Brownie con Frutos Rojos', price: 6.5, description: 'Brownie con frutos rojos', image: '../src/assets/brownie-fr.webp', categoryId: '3' },
    { id: 6, name: 'Brownie Vegano', price: 7, description: 'Brownie sin ingredientes de origen animal', image: '../src/assets/brownie-vegano.jpg', categoryId: '3' },
  ];

  useEffect(() => {
    setBrownies(
      categoryId ? allBrownies.filter(brownie => brownie.categoryId === categoryId) : allBrownies
    );
  }, [categoryId]);

  // Usamos useRef para crear una referencia para cada input de cantidad
  const quantityInputRefs = useRef([]);

  // Esta función se llamará cuando se agregue un brownie al carrito
  const handleAddToCart = (brownie, index) => {
    const quantity = parseInt(quantityInputRefs.current[index].value); // Obtenemos la cantidad del input correspondiente
    addItem(brownie, quantity); // Agregar el brownie al carrito
    console.log(`${brownie.name} agregado al carrito`);

    // Restablecer la cantidad a 1
    quantityInputRefs.current[index].value = 1;
  };

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <h2 className="product-title">Productos</h2>
      <div className="brownie-list">
        {brownies.map((brownie, index) => (
          <div key={brownie.id} className="brownie-item">
            <img src={brownie.image} alt={brownie.name} />
            <h2>{brownie.name}</h2>
            <p>{brownie.description}</p>
            <p>Precio: ${brownie.price}</p>
            <input 
              type="number" 
              min="1" 
              defaultValue="1" 
              ref={(el) => quantityInputRefs.current[index] = el} // Asignamos la referencia correspondiente a cada input
            />
            <button onClick={() => handleAddToCart(brownie, index)}>
              Agregar al carrito
            </button>
            {/* Link a los detalles del producto */}
            <Link to={`/item/${brownie.id}`} className="details-button">Detalles del Producto</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
