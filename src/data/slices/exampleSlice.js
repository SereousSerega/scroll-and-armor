import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        value: 'this is redux',
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, setValue } = exampleSlice.actions;

export default exampleSlice.reducer;