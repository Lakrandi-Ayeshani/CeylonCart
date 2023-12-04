import React from 'react';
import { useAppSelector } from '../store/hooks';
import Item from '../components/ItemCard';

const ItemList = () => {
  const items = useAppSelector((state) => state.item.items);

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item) => (
        <div>
          <Item key={item.id} item={item}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
