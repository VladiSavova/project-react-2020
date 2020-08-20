import React from 'react';
import styles from './index.module.css';
import PostValues from '../values';

const PostDetailsInfo = ({ post }) => {

    return (
        <div>
            <div className={styles.info}>
                <h2>{post.title}</h2>
                <h3>Post Description</h3>
                <p>{post.description}</p>
                <PostValues author={post.author}/>
            </div>
        </div>
    )
}

export default PostDetailsInfo;