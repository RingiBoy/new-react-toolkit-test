import React from 'react';

const SingleDog = ({dog}) => {
    return (
        <div>
            id:  {dog.id}) Name: {dog.name}
        </div>
    );
};

export default SingleDog;