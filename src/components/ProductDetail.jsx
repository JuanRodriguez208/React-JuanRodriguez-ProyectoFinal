import React from "react";
import { useParams } from "react-router-dom";
import products from "./products"; // Importamos los productos

const ProductDetail = () => {
  const { productId } = useParams(); // Obtenemos el id del producto desde la URL
  const product = products.find((p) => p.id === parseInt(productId)); // Buscamos el producto en base al id

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {product.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Calorías:</strong> {product.calories} kcal</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
};

export default ProductDetail;