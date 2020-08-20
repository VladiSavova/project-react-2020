import React from 'react';
import Paragraph from '../../paragraph'

const PostValues = ({ comments, likes, author }) => {
    return (
        <div>
        {/* <SmallParagraph label='Comments' value={comments.length} />
        <SmallParagraph label='Likes' value={likes.length} /> */}
        <Paragraph label='Author' value={author.username} />
    </div>

    )
}

export default PostValues;