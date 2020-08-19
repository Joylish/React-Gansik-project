import React from 'react';

import Item from './Item';

import ItemCollectionContainer from '../style/ItemCollectionContainer';

const ItemCollection = ({ productItems }) => {
  const { category, items } = productItems;
  return (
    <ItemCollectionContainer>
      <h3 className="category">{category}</h3>
      <div className="collection">
        {items.filter((x) => x.id <= 4).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </ItemCollectionContainer>
  );
};

export default ItemCollection;
