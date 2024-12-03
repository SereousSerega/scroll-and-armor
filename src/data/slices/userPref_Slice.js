import { createSlice } from '@reduxjs/toolkit';

const userPref_Slice = createSlice({
    name: 'userPref',
    initialState: {
        pref:{
            language:'en',
        }
    },
    reducers: {
        setPref: (state, action) => {
            state.pref.language = action.payload;
        },
    },
});

export const {setPref} = userPref_Slice.actions;

export default userPref_Slice.reducer;