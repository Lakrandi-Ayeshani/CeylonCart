import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { ItemValues } from '../types/type';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../features/item/itemSlice';

interface ItemProps {
    item: ItemValues, 
    totalPrice: number,
    setTotalPrice: (index: number) => void,
}

const Item: React.FC<ItemProps> = (props) => {
    const dispatch = useAppDispatch();
    const cartList = useAppSelector(state => state.item.cartItems);
    
    const handleAddCart = (item: ItemValues) => {
        const isExisting = cartList.some(cartItem => cartItem.id === item.id)
        if(isExisting === false) {
            dispatch(addToCart(item));
            props.setTotalPrice(props.totalPrice + props.item.price);
        }
    }

  return (
    <div key={props.item.id} className='mx-auto card flex flex-col flex justify-center'>
        <div className='px-5' style={{position: 'relative'}}>
            <img src={props.item.imgURL} alt={props.item.name} className='rounded-2xl'></img>
            <button className='cart-button p-3' onClick={() => handleAddCart(props.item)}>
                <MdAddShoppingCart/>
            </button>
        </div>
        <div className='px-5'>
            <h1 className='name-text'>{props.item.name}</h1>
            <p className='description-text'>{props.item.description}</p>
            <div className='flex price-line'>
                <span className='lkr-text'>LKR</span>
                <span className='price-text'>{props.item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default Item