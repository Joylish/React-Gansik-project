import React from 'react';

import ItemCollection from './ItemCollection';

import PreviewContainer from '../style/PreviewContainer';

import product from '../../fixtures/product';

const Preview = () => (
  <PreviewContainer>
    <h2>New !!</h2>
    {
      product.map((productItems) => (
        <ItemCollection key={productItems.id} productItems={productItems} />
      ))
    }
  </PreviewContainer>
);

export default Preview;
