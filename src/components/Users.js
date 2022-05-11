import React from 'react';
import {useSelector} from "react-redux";
import User from "./User";

const Users = () => {
   const {users}=useSelector(state => state.usersFromStore)

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;