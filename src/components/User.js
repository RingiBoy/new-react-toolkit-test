import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const User = ({user}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {user.id}--{user.name}
            <hr/>
            zp:{user.zp}
            <button onClick={()=>dispatch(userActions.actions.delUser({id:user.id}))}>delete</button>
        </div>
    );
};

export default User;