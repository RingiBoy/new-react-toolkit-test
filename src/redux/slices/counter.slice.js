import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1:0,
    count2:777
}

const counterSlice= createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        reducerIncrement1:(state)=>{
            state.count1+=10;
        },
        reducerDecrement1:(state) => {
            state.count1-=10;
        },
        reset:(state)=>{
            state.count1 = 0;
        },
        reducerIncrement2:(state)=>{
            state.count2+=10;
        },
        reducerDecrement2:(state) => {
            state.count2-=10;
        },
        reset2:(state)=>{
            state.count2 = 777;
        }

    }
});

const  {reducer:counterReducer, actions} = counterSlice;

export default counterReducer
export  {
    actions
}