import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { ItemValues } from '../types/type';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../features/item/itemSlice';
import { useSelector } from 'react-redux';

interface ItemProps {
    item: ItemValues, 
}

const Item: React.FC<ItemProps> = (props) => {
    const dispatch = useAppDispatch();
    const cartList = useAppSelector(state => state.item.cartItems);
    
    const handleAddCart = (item: ItemValues) => {
        const isExisting = cartList.some(cartItem => cartItem.id === item.id)
        if(isExisting === false) {
            dispatch(addToCart(item));
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