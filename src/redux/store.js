import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";
import petReducer from "./slices/pet.slice";



const rootReducer= combineReducers({
    counterFromStore:counterReducer,
    usersFromStore:userReducer,
    petsFromStore:petReducer
})


const store = configureStore({
    reducer:rootReducer

})


export default store



