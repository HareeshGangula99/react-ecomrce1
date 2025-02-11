import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
