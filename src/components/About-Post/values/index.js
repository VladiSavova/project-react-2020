import React from 'react';
import Paragraph from '../../paragraph'

const PostValues = ({ comments, likes, author }) => {
    return (
        <div>
        {/* <Paragraph label='Comments' value={comments.length} /> */}
        {/* <Paragraph label='Likes' value={likes} /> */}
        <Paragraph label='Author' value={author.username} />
    </div>

    )
}

export default PostValues;