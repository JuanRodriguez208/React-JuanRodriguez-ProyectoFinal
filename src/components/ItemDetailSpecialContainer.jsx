import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Lista de brownies especiales (deberías obtener esto de una API o base de datos en un proyecto real)
const allSpecialBrownies = [
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

const ItemDetailSpecialContainer = () => {
  const { id } = useParams();  // Obtiene el id del brownie desde la URL
  const [product, setProduct] = useState(null);

  // Buscar el producto según el id
  useEffect(() => {
    const foundProduct = allSpecialBrownies.find(brownie => brownie.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  // Si no se encuentra el producto, muestra un mensaje de "Cargando..." o error
  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <ul>
        <li><strong>Ingredientes:</strong> {product.ingredients.join(', ')}</li>
        <li><strong>Calorías:</strong> {product.calories} kcal</li>
      </ul>
    </div>
  );
};

export default ItemDetailSpecialContainer;
