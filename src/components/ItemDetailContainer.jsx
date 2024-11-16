import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();  // Obtiene el id del producto desde la URL
  const [product, setProduct] = useState(null);

  // Lista de productos con detalles completos
  const allBrownies = [
    { id: 1, name: 'Brownie Clásico', price: 5, description: 'Delicioso brownie clásico', image: '../src/assets/brownie-clasico.webp', ingredients: ['Harina', 'Chocolate oscuro', 'Manteca', 'Azúcar'], calories: 250 },
    { id: 2, name: 'Brownie de Chocolate Blanco', price: 6, description: 'Brownie con trozos de chocolate blanco', image: '../src/assets/brownie-blanco.webp', ingredients: ['Harina', 'Chocolate blanco', 'Manteca', 'Azúcar'], calories: 260 },
    { id: 3, name: 'Brownie con Nueces', price: 7, description: 'Brownie con nueces pecanas', image: '../src/assets/brownie-nuez.jfif', ingredients: ['Harina', 'Chocolate', 'Nueces pecanas', 'Azúcar'], calories: 280 },
    { id: 4, name: 'Brownie de Café', price: 5.5, description: 'Brownie con sabor a café', image: '../src/assets/brownie-cafe.jpg', ingredients: ['Harina', 'Café', 'Chocolate', 'Azúcar'], calories: 270 },
    { id: 5, name: 'Brownie con Frutos Rojos', price: 6.5, description: 'Brownie con frutos rojos', image: '../src/assets/brownie-fr.webp', ingredients: ['Harina', 'Frutos rojos', 'Chocolate blanco', 'Azúcar'], calories: 250 },
    { id: 6, name: 'Brownie Vegano', price: 7, description: 'Brownie sin ingredientes de origen animal', image: '../src/assets/brownie-vegano.jpg', ingredients: ['Harina integral', 'Cocoa', 'Aceite de coco', 'Azúcar moreno'], calories: 230 },
    { id: 7, name: 'Brownie Gourmet', price: 10, description: 'Brownie gourmet con ingredientes premium', image: '../src/assets/brownie-gourmet.jpg', ingredients: ['Harina', 'Chocolate oscuro', 'Almendras', 'Manteca'], calories: 300 },
    { id: 8, name: 'Brownie de Matcha', price: 9, description: 'Brownie de matcha suave y cremoso', image: '../src/assets/brownie-matcha.jpg', ingredients: ['Harina', 'Matcha', 'Manteca', 'Azúcar'], calories: 280 },
    { id: 9, name: 'Brownie de Nutella', price: 11, description: 'Brownie relleno de Nutella', image: '../src/assets/brownie-nutella.jfif', ingredients: ['Harina', 'Nutella', 'Manteca', 'Azúcar'], calories: 350 },
  ];

  // Buscar el producto que corresponde con el id
  useEffect(() => {
    const foundProduct = allBrownies.find(brownie => brownie.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ul>
        <li><strong>Ingredientes:</strong> {product.ingredients.join(', ')}</li>
        <li><strong>Calorías:</strong> {product.calories} kcal</li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;
