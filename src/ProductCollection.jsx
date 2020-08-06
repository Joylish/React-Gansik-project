import React from 'react';

import ProductItem from './ProductItem';

import ProductCollectionContainer from './style/ProductCollectionContainer';

const ProductCollection = ({ productItems }) => {
  const { category, items } = productItems;
  return (
    <ProductCollectionContainer>
      <h3 className="category">{category}</h3>
      <div className="collection">
        {items.filter((x) => x.id <= 4).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </ProductCollectionContainer>
  );
};

export default ProductCollection;
