import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const loginFetch = createAsyncThunk(
    "authorization/loginFetch",
    async function (login, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/create", options)

            const data = await response.json();
            if (data.access) {
                localStorage.setItem("token", JSON.stringify(data));
                dispatch(loginAdd(data))
            }

        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const tokenAddRefresh = createAsyncThunk(
    "authorization/tokenAdd",
    async function (token, {rejectWithValue, dispatch}){
        try {

            let obj = {
                refresh: token.refresh
            }
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)

            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/refresh/", options)

            const data = await response.json();
            if (data.bicycles && data.total_sum) {
                dispatch(loginAdd(data))
            }
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)




export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        token: undefined
    },
    reducers: {
        loginAdd(state, action){
            console.log(action)
            state.token = action.payload.access;


        },
        loginExit(state){
            state.token = undefined;
            localStorage.removeItem("token")
        }
    }
})

export const {loginAdd, loginExit} = loginSlice.actions;

export default loginSlice.reducer