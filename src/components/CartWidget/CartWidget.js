import cart from './assets/Cart.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget'>
      <img className='CartImg' src={cart} alt='cart-widget' />
      {totalQuantity > 0 && <div className='CartQuantity'>{totalQuantity}</div>}
    </Link>
  );
};

export default CartWidget;
