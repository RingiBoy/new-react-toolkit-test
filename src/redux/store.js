import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";



const rootReducer= combineReducers({
    counterFromStore:counterReducer,
    usersFromStore:userReducer
})


const store = configureStore({
    reducer:rootReducer

})


export default store



