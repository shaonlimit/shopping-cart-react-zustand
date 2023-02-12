import React from 'react';
import { useCart } from '../../store/store';

import './Product.css';

const Product = ({ product }) => {
  const { name, img, cost } = product;
  const addToCart = useCart((state) => state.addToCart);
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  console.log(cart);

  return (
    <div className='product'>
      <img src={img} alt='' />
      <h2>{name}</h2>
      <h4>Price: ${cost}</h4>
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <button onClick={() => removeFromCart(product)}>Remove product</button>
    </div>
  );
};

export default Product;
