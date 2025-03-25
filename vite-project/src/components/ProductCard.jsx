import React from 'react';

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div id="box2" onClick={() => onProductClick(product)}>
      <img src={product.image} alt={product.title} />
      <h2 className="text-lg font-semibold text-gray-900 pl-2">{product.title}</h2>
      <h3 className="text-xl center font-bold text-red-600 pl-2">${product.price}</h3>
      {/* <h4 className="text-sm text-green-600 mt-2 pl-2">{product.delivery}</h4> */}
    </div>
  );
};

export default ProductCard;
