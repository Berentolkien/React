import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onRemove = (itemId) => {
    removeItem(itemId);
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <CartItem item={item} onRemove={onRemove} />
          </li>
        ))}
      </ul>
      <div className="total-section">
        <p className="total-text">Total: ${calculateTotal()}</p>
        <div className="action-buttons">
          <button className="clear-button" onClick={clearCart}>
            Limpiar Carrito
          </button>
          <Link to="/checkout" className="checkout-button">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
