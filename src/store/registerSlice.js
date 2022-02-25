import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk(
    "register/registerFetch",
    async function(reg, {rejectWithValue}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reg)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/", options)
            if (!response.ok){
                throw new Error("Что то пошло не так")
            }
            const data = await response.json();
            console.log(data)

        }catch (error){
            return rejectWithValue(error.message)
        }
    })

const registerSlice = createSlice({
    name: "register",
    initialState: {
        register: {

        }
    },
    reducers: {
        registerAdd(state, action){

        }
    }
})

export const {registerAdd} = registerSlice.actions;

export default registerSlice.reducer