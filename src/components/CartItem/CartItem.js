import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">Precio: ${item.price}</p>
        <p className="item-quantity">Cantidad: {item.quantity}</p>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
