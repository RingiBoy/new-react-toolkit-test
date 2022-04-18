import React from 'react';

const Post = ({post}) => {
    const {id,title, body } = post
    
    return (
        <div>
            {id}--{title}--{body}
            <br />
            <br />
        </div>
    );
};

export default Post;