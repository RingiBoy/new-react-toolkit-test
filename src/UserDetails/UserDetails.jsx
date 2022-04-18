import React from 'react';

const UserDetails = ({user, getUserId}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id} - {name}- {email}
            <button onClick={()=>{getUserId(id)}}>get posts on this user</button>
        </div>
    );
};

export default UserDetails;