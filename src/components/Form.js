import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const Form = () => {
   const nameInput = useRef();
   const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=>dispatch(userActions.actions.addUser({user:nameInput.current.value}))}>add user</button>
        </div>
    );
};

export default Form;