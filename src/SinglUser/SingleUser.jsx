import React from 'react';

const SingleUser = ({user, getUser}) => {
    
    const {name, id}= user;
    return (
        <div>
           {id}--{name} <button onClick={()=>getUser(user)}>get details</button>
        </div>
    );
};

export default SingleUser;