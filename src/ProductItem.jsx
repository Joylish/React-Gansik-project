import React from 'react';

import ProductItemContainer from './style/ProductItemContainer';

const ProductItem = ({ item }) => {
  const {
    name, sellerName, imageUrl,
  } = item;

  return (
    <ProductItemContainer>
      <div
        className="itemImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="itemInfo">
        <span className="name">{name}</span>
        <span className="sellerName">{sellerName}</span>
      </div>
    </ProductItemContainer>
  );
};

export default ProductItem;
