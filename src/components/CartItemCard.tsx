import React, { useState } from 'react';
import { ITemCartValues, ItemValues } from '../types/type';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { quantityDecrement, quantityIncrement } from '../features/item/itemSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { current } from '@reduxjs/toolkit';

interface CartItemProps {
    cartItem: ItemValues,
    totalPrice: number,
    setTotalPrice: (index: number) => void,
    index: number
}

const CartItem: React.FC<CartItemProps> = (props) => {
    // const quantity = useAppSelector(state => state.item.quantity);
    const dispatch = useAppDispatch();

    const currentTotalPrice = props.totalPrice;
    // const [itemTotalPrice, setItemTotalPrice] = useState<number>(0);

    const handleIncreaseQuantity = (index: number) => {
        // const newTotalPrice = currentTotalPrice+ props.cartItem.price;
        // props.setTotalPrice(newTotalPrice);
        console.log(index);
        dispatch(quantityIncrement(index));
    }

    const handleDecreaseQuantity = (index: number) => {
        dispatch(quantityDecrement(index));
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
                    onClick={() => handleDecreaseQuantity(props.index)}
                >
                    <CiCircleMinus />
                </button>
                <span className='min-h-fit px-1'>{props.cartItem.orderQuantity}</span>
                <button 
                    className='quantity-button'
                    onClick={() => handleIncreaseQuantity(props.index)}
                >
                    <CiCirclePlus />
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem