import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUserInfo = createAsyncThunk(
    "authorization/tokenAdd",
    async function (token, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access}`
                }
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/me/", options)

            const data = await response.json();
            dispatch(infoAdd(data))
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)


export const UsersInfoSlice = createSlice({
    name: "infoUsers",
    initialState: {
        info: {
            email: "",
            name: "",
            phone_number: "",
            password: ""
        }
    },
    reducers: {
        infoAdd(state, action){
            state.info.email = action.payload.email;
            state.info.name = action.payload.name;
            state.info.phone_number = action.payload.phone_number
        },
        userEdit(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.info[keys[0]] = text;

        }
    }
})

export const {infoAdd, userEdit} = UsersInfoSlice.actions

export default UsersInfoSlice.reducer;