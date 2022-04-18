import React, { useEffect, useState } from 'react';

import { userService } from '../services/user.service';
import SingleUser from '../SinglUser/SingleUser';

const Users = ({getUser}) => {
    
    const [users, setUser]=useState([]);
    
    useEffect(()=>{
        userService.getAll().then(newUsers=>setUser(newUsers))
    },[])
    
    return (
        <div>
            {users.map(value=> <SingleUser key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export default Users;