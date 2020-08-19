import React from 'react';

import Item from '../components/Item';

function ItemsPage({ product }) {
  const { title, productItems } = product;

  return (
    <div className="productPage">
      <h2>{title}</h2>
      <div className="productItems">
        {
          productItems.map((item) => (
            <Item key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default ItemsPage;
