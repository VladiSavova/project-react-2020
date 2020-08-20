import React from 'react';

const values = ({ comments, likes, author }) => {
    return (
        <div>
            {/* <h3 label='Comments' value={comments.length} /> */}
            {/* <h3 label='Likes' value={likes.length} /> */}
            <h3 label='Author' value={author.username} />
        </div>
    )
}

export default values;