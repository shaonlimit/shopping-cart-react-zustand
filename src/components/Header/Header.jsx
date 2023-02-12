import React from 'react';
import { useCart } from '../../store/store';
import './Header.css';

const Header = () => {
  const cart = useCart((state) => state.cart);
  const totalPrice = cart.reduce(
    (pre, item) => pre + item.cost * item.quantity,
    0
  );
  return (
    <div className='header navbar'>
      <h1>Fruits</h1>
      <h4>Total Cost: ${totalPrice}</h4>
    </div>
  );
};

export default Header;
