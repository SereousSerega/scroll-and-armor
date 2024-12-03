import { createSlice } from '@reduxjs/toolkit';

const goblinShop_Slice = createSlice({
    name: 'goblinShop',
    initialState: {
        cardCollection: [],
        cardPool: [],
        userCart: [],
    },
    reducers: {
        setCardCollection: (state, action) => {
            state.cardCollection = action.payload
        },
        setCardPool: (state, action) => {
            state.cardPool = action.payload;
        },

        toCart: {
            add: (state, action) => {
                state.userCart.push(action.payload)
                state.cardPool = state.cardPool.filter(item => item !== action.payload);
            },
            remove: (state, action) => {
                state.userCart = state.userCart.filter(item => item !== action.payload);
                state.cardPool.push(action.payload)
            },
        },
    },
});

export const { setCardCollection, setCardPool, toCart } = goblinShop_Slice.actions;

export default goblinShop_Slice.reducer;