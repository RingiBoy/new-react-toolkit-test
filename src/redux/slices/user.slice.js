import {createSlice} from "@reduxjs/toolkit";

let initialState= {
    users:[]
};
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        addUser:(state,action)=>{

            const {user,zp} = action.payload    //action.payload.user
            const newUser={id: new Date().getTime(),  name:user, zp:zp}
            state.users.push(newUser)
            console.log(action.payload )


        },
        delUser:(state,action)=>{
           const indexInArray=  state.users.findIndex(value=>value.id===action.payload.id);
           state.users.splice(indexInArray, 1)
        }
    }

})



const {reducer: userReducer, actions} = userSlice

export default userReducer
export const userActions = {
    actions
}