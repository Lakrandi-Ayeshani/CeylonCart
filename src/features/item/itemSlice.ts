import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { ItemValues } from '../../types/type';

interface ItemState {
    items: Array<ItemValues>
    cartItems: Array<ItemValues>
    // cartItems: Array<{item: ItemValues, quantity?: number }>
}

const initialState: ItemState = {
    items: [
        {
            id: 1,
            name: 'item 1',
            description: 'description 1',
            price: 100,
            imgURL: 'https://picsum.photos/250',
            orderQuantity: 0,
        },
        {
            id: 2,
            name: 'item 2',
            description: 'description 2',
            price: 100,
            imgURL: 'https://picsum.photos/249',
            orderQuantity: 0,
        },
        {
            id: 3,
            name: 'item 3',
            description: 'description 3',
            price: 100,
            imgURL: 'https://picsum.photos/248',
            orderQuantity: 0,
        },
        {
            id: 4,
            name: 'item 4',
            description: 'description 4',
            price: 100,
            imgURL: 'https://picsum.photos/247',
            orderQuantity: 0,
        },
        {
            id: 5,
            name: 'item 5',
            description: 'description 5',
            price: 100,
            imgURL: 'https://picsum.photos/246',
            orderQuantity: 0,
        },
        {
            id: 6,
            name: 'item 6',
            description: 'description 6',
            price: 100,
            imgURL: 'https://picsum.photos/245',
            orderQuantity: 0,
        },
        {
            id: 7,
            name: 'item 7',
            description: 'description 7',
            price: 100,
            imgURL: 'https://picsum.photos/244',
            orderQuantity: 0,
        },
    ],
    cartItems: [],
}

export const itemSlice = createSlice({
    name: 'item',
    initialState, 
    reducers: {
        addToCart: (state, {payload}) => {
            let changeItem = state.items.find((item) => item.id === payload.id);
            if (changeItem) {
                changeItem = { ...changeItem };
                changeItem.orderQuantity = 1;
                state.cartItems.push(changeItem);
            }
        },
        quantityIncrement: (state, {payload}) => {
            const newArray = state.cartItems.map((item) => {
                if (item.id === payload) {
                    item.orderQuantity += 1;
                    return item
                }
                return item;
            });
            state.cartItems = newArray;        
        },
        quantityDecrement: (state, {payload}) => {
            const newArray = state.cartItems.map((item) => {
                if (item.id === payload) {
                    item.orderQuantity -= 1;
                    return item
                }
                return item;
            });
            state.cartItems = newArray;   
        },
    },
})

export const { addToCart, quantityDecrement, quantityIncrement } = itemSlice.actions

export const selectItem = (state: RootState) => state.item.items

export default itemSlice.reducer