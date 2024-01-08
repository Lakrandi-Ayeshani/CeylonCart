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
        <h1 className='text-center font-bold text-2xl text-gray-600'>Cart List</h1>
        <table className='table-fixed p-5 border text-gray-500'>
          <thead>
            <tr>
              <th className='border'>Item</th>
              <th className='border'>Item Total Price</th>
            </tr>
          </thead>
          <tbody>
            {props.cartList.map((item,index) => (
              <tr key={item.id} className='border'>
                <td className='p-2 border'>
                  <h5 className='text-center font-semibold'>{item.name}</h5>
                  <CartItem key={item.id} index={index} cartItem={item} totalPrice={props.totalPrice} setTotalPrice={props. setTotalPrice}/>
                </td>
                <td className='p-2 border'>{item.price * item.orderQuantity}</td>
              </tr>
            ))}
            <tr>
              <th>Total Price</th>
              <td className='border'>{props.totalPrice}</td>
            </tr>
          </tbody>
        </table>
        {/* <h1 className='text-center'>{props.totalPrice}</h1> */}

        {/* {props.cartList.map((item, index) => (
            <div onChange={handleTotalPrice}>
              <CartItem key={item.id} index={index} cartItem={item} totalPrice={props.totalPrice} setTotalPrice={props. setTotalPrice}/>
            </div>
        ))} */}

    </div>
  );
};

export default CartList;
