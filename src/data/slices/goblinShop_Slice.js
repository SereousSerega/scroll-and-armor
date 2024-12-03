import { createSlice } from '@reduxjs/toolkit';

const goblinShop_Slice = createSlice({
    name: 'goblinShop',
    initialState: {
        cardCollection:[],
        cardPool:[],
    },
    reducers: {
        setCardCollection: (state, action) => {
            state.cardCollection = action.payload
        },
        setCardPool: (state, action) => {
            state.cardPool = action.payload;
        }
    },
});

export const {setCardCollection, setCardPool} = goblinShop_Slice.actions;

export default goblinShop_Slice.reducer;