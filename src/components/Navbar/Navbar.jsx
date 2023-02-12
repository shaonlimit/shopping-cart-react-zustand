import React from 'react';
import { useCart } from '../../store/store';
import './Navbar.css';

const Navbar = () => {
  const cart = useCart((state) => state.cart);
  const cartLength = cart.reduce((pre, item) => pre + item.quantity, 0);
  return (
    <div className='navbar'>
      <h4>Fruit Basket</h4>
      <i class='bx bxs-cart-alt bx-sm'>
        <p>{cartLength}</p>
      </i>
    </div>
  );
};

export default Navbar;
