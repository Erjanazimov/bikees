import {createSlice} from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name: "authorization",
    initialState: {
      register: {
          name: "",
          email: "",
          phone_number: "",
          password: ""
      },
        login: {
            phone_number: "",
            password: ""
        }
    },
    reducers: {
        registerChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.register[keys[0]] = text;
        },
        loginChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.login[keys[0]] = text
        }
    }
})

export const {registerChange, loginChange} = authorizationSlice.actions

export default authorizationSlice.reducer;