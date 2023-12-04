import React, { useState } from 'react';
import { ItemValues } from '../types/type';
import CartItem from '../components/CartItemCard';


interface CartListProps {
    cartList: Array<ItemValues>
}

const CartList: React.FC<CartListProps> = (props) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const handleTotalPrice = () => {
      
  }

  return (
    <div className="flex flex-col gap-4">
        <h1 className='text-center'>Cart List</h1>
        <h1 className='text-center'>{totalPrice}</h1>

        {props.cartList.map((item, index) => (
            <div onChange={handleTotalPrice}>
              <CartItem key={item.id} index={index} cartItem={item} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
            </div>
        ))}

    </div>
  );
};

export default CartList;
