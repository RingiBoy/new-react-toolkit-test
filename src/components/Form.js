import React, {useRef} from 'react';
import {useDispatch,useSelector } from "react-redux";
import {userActions} from "../redux/slices/user.slice";



const Form = () => {
   const nameInput = useRef();
   const dispatch = useDispatch();
   const {count2} = useSelector(state => state.counterFromStore);
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=>{
                dispatch(userActions.actions.addUser({user:nameInput.current.value, zp:count2}))
                nameInput.current.value = ''
            }
            }>add user</button>
        </div>
    );
};

export default Form;