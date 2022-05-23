import React from 'react';

const SingleCat = ({cat}) => {
    return (
        <div>
           id:  {cat.id}) Name: {cat.name}
        </div>
    );
};

export default SingleCat;