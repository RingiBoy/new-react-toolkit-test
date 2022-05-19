import {createSlice} from "@reduxjs/toolkit";

let initialState= {
    cats:[],
    dogs:[]
};
const petSlice = createSlice({
    name:'petSlice',
    initialState,
    reducers:{
        addCat:(state,action)=>{
            const name = action.payload.name
            const newCat = {id: new Date().getTime(), name};
            state.cats.push(newCat)
        },
        addDog:(state,action)=>{
            const name = action.payload.name
            const newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog)
        },
        delCat:(state, action)=>{
            const indexCat = state.cats.findIndex((value => value.id===action.payload.id));
            state.cats.splice(indexCat,1)
        },
        delDog:(state, action)=>{
            const indexDog = state.dogs.findIndex((value => value.id===action.payload.id));
            state.dogs.splice(indexDog,1)
        }
    }
})

const {reducer: petReducer, actions} = petSlice

export default petReducer
export const petActions = {
    actions
}

