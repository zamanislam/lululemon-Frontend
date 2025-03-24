import React from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
       
        <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button 
        onClick={onAddToCart(product)} 
        className="p-2 bg-green-500 text-white rounded">
            Add to Cart</button>
        <button onClick={onClose} className="p-2 bg-gray-500 text-white rounded mt-2">Close</button>
      </div>
    </div>
  );
};

export default ProductModal;
