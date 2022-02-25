import {createSlice} from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchValue: [null, null],
        bikeSearch: []
    },
    reducers: {
        addSearch(state, action){
            state.searchValue = action.payload
        },
    }
})

export const {addSearch } = searchSlice.actions;

export default searchSlice.reducer;