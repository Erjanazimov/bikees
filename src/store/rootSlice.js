import {configureStore} from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice";
import authorizationReducer from "./authorizationSlice";
import registerReducer from "./registerSlice";
import loginReducer from "./loginSlice";
import SearchReducer from "./searchSlice";
import UsersInfoReducer from "./usersInfoSlice";

export default configureStore({
    reducer:{
        byBike: bikeReducer,
        authorization: authorizationReducer,
        register: registerReducer,
        login: loginReducer,
        search: SearchReducer,
        infoUsers: UsersInfoReducer
    }
})