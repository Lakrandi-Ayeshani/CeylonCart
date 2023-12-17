import React from 'react';
import { useAppSelector } from '../store/hooks';
import Item from '../components/ItemCard';

interface ListProps {
  totalPrice: number,
  setTotalPrice: (index: number) => void,
  styleClass: string,
}

const ItemList:React.FC<ListProps> = (props) => {
  const items = useAppSelector((state) => state.item.items);

  return (
    <div className={`grid m-6 gap-4 ${props.styleClass}`}>
      {items.map((item) => (
        <div>
          <Item key={item.id} item={item} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
