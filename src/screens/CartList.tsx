import React from 'react';
import { ItemValues } from '../types/type';
import CartItem from '../components/CartItemCard';


interface CartListProps {
    cartList: Array<ItemValues>,
    totalPrice: number,
    setTotalPrice: (index: number) => void,
}

const CartList: React.FC<CartListProps> = (props) => {
  const handleTotalPrice = () => {
      
  }

  return (
    <div className="flex flex-col gap-4">
        <h1 className='text-center'>Cart List</h1>
        <h1 className='text-center'>{props.totalPrice}</h1>

        {props.cartList.map((item, index) => (
            <div onChange={handleTotalPrice}>
              <CartItem key={item.id} index={index} cartItem={item} totalPrice={props.totalPrice} setTotalPrice={props. setTotalPrice}/>
            </div>
        ))}

    </div>
  );
};

export default CartList;
