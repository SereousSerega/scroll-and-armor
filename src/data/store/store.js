import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../slices/exampleSlice';
import goblinShop_Reducer from '../slices/goblinShop_Slice'
import userPref_Reducer from '../slices/userPref_Slice'

const store = configureStore({
    reducer: {
        example: exampleReducer,
        userPref: userPref_Reducer,
        goblinShop: goblinShop_Reducer,
    },
});

export default store;