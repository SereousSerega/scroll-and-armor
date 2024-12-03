import { configureStore } from '@reduxjs/toolkit';
import goblinShop_Reducer from '../slices/goblinShop_Slice'
import userPref_Reducer from '../slices/userPref_Slice'

const store = configureStore({
    reducer: {
        userPref: userPref_Reducer,
        goblinShop: goblinShop_Reducer,
    },
});

export default store;