import React from 'react';
import { ItemValues } from '../types/type';
import { useAppDispatch } from '../store/hooks';
import { quantityDecrement, quantityIncrement } from '../features/item/itemSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface CartItemProps {
    cartItem: ItemValues,
    totalPrice: number,
    setTotalPrice: (index: number) => void,
    index: number
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const dispatch = useAppDispatch();

    const handleIncreaseQuantity = (id: number) => {
        props.setTotalPrice(props.totalPrice + props.cartItem.price);
        dispatch(quantityIncrement(id));
    }

    const handleDecreaseQuantity = (id: number) => {
        if (props.cartItem.orderQuantity > 0) {
            props.setTotalPrice(props.totalPrice - props.cartItem.price);
            dispatch(quantityDecrement(id));
        }
    }

  return (  
    <div key={props.cartItem.id} className='mx-auto cart-card flex flex-col flex justify-center'>
        <div className='px-5'>
            <img src={props.cartItem.imgURL} alt={props.cartItem.name} className='rounded-2xl'></img>
        </div>
        <div className='flex flex-col items-center px-5'>
            <div className='flex price-line text-center'>
                <span className=''>LKR.</span>
                <span className=''>{props.cartItem.price}</span>
            </div>
            <div className='price-line'>
                <button 
                    className='quantity-button p-1'
                    onClick={() => handleDecreaseQuantity(props.cartItem.id)}
                >
                    <CiCircleMinus />
                </button>
                <span className='min-h-fit px-1'>{props.cartItem.orderQuantity}</span>
                <button 
                    className='quantity-button'
                    onClick={() => handleIncreaseQuantity(props.cartItem.id)}
                >
                    <CiCirclePlus />
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem