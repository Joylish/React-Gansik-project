import React from 'react';

import ProductCollection from './ProductCollection';

import PreviewProductContainer from './style/PreviewProductContainer';

import product from '../fixtures/product';

const PreviewProduct = () => (
  <PreviewProductContainer>
    <h2>New !!</h2>
    {
      product.map((productItems) => (
        <ProductCollection key={productItems.id} productItems={productItems} />
      ))
    }
  </PreviewProductContainer>
);

export default PreviewProduct;
