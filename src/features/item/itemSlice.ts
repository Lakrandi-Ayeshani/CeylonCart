import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface ItemState {
    // value: number
    items: Array<{ name: string; description: string; }>
}

const initialState: ItemState = {
    // value: 0,
    items: [
        {
            name: 'item 1',
            description: 'description 1',
        },
        {
            name: 'item 2',
            description: 'description 2',
        },
        {
            name: 'item 3',
            description: 'description 3',
        },
        {
            name: 'item 4',
            description: 'description 4',
        },
        {
            name: 'item 5',
            description: 'description 5',
        },
        {
            name: 'item 6',
            description: 'description 6',
        },
        {
            name: 'item 7',
            description: 'description 7',
        },
    ]
}

export const itemSlice = createSlice({
    name: 'item',
    initialState, 
    reducers: {
        // increment: (state) => {
        //     state.value += 1

        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },

    },
})

// export const { increment, decrement } = itemSlice.actions

export const selectItem = (state: RootState) => state.item.items

export default itemSlice.reducer