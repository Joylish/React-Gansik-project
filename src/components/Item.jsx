import React from 'react';

import ItemContainer from '../style/ItemContainer';

const Item = ({ item }) => {
  const {
    name, sellerName, imageUrl,
  } = item;

  return (
    <ItemContainer>
      <div
        className="itemImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="itemInfo">
        <span className="name">{name}</span>
        <span className="sellerName">{sellerName}</span>
      </div>
    </ItemContainer>
  );
};

export default Item;
