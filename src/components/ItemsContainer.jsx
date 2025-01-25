import React from 'react';
import ItemCard from './ItemCard';

const ItemsContainer = ({ items, gridCols }) => {
  const gridClasses = {
    "3": "grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
    "4": "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };
  return (
    <div className={` grid gap-[2vw] md:gap-[1vw] py-[50px] ${gridClasses[gridCols]}`}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsContainer;

// 