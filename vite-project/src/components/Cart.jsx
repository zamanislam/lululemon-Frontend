import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  return (
    <div>
      <h1 className='ml-96'>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className='ml-96'>
          {cart.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt={item.title} width="300" />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
