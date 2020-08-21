import React from 'react';
import styles from './index.module.css';
import Paragraph from '../../paragraph/index'
const PostDetailsInfo = ({ post }) => {

    return (

            <div className={styles.info}>
                <h2>{post.title}</h2>    
                <img alt="postImage" src={post.image}></img>
                <Paragraph label='Author' value={post.author.username}/> 
                <h3>Post Description:</h3>
                <p>{post.description}</p> 
                <Paragraph label='Likes' value={post.likes.length}/>           
            </div>
    )
}

export default PostDetailsInfo;