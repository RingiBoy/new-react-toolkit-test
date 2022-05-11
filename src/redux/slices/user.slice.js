import {createSlice} from "@reduxjs/toolkit";

let initialState= {
    users:[]
};
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const {user} = action.payload    //action.payload.user
            const newUser={id: new Date().getTime(),  name:user}
            state.users.push(newUser)
        }
    }
})



const {reducer: userReducer, actions} = userSlice

export default userReducer
export const userActions = {
    actions
}