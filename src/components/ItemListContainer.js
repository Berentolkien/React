import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="container">
        <h2 className="display-4 text-center mb-4">{greeting}</h2>
        <p className="lead text-center">
          Bienvenido a nuestra biblioteca en línea. Explora nuestra amplia selección de libros, intercambia y encuentra
          las mejores ofertas con otros usuarios.
        </p>
      </div>
    </div>
  );
};

export default ItemListContainer;
