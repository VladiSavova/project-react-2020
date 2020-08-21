import React from 'react';
import styles from './index.module.css';
import PostValue from '../values'

const PostDetailsInfo = ({ post }) => {

    return (

            <div className={styles.info}>
                <h2>{post.title}</h2>
                <PostValue author={post.author}/>
                 <img alt="postImage" src={post.image}></img>
                <h3>Post Description:</h3>
                <p>{post.description}</p>               
            </div>
    )
}

export default PostDetailsInfo;