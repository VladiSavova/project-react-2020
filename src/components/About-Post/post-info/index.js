import React from 'react';
import styles from './index.module.css';
import Paragraph from '../../paragraph/index';

const PostDetailsInfo = ({ post }) => {

    return (
            <div className={styles.info}>
                <img alt="postImage" src={post.image}  className={styles.image} ></img>
                <Paragraph label='Author' value={post.author.username}/> 
                <Paragraph label='Likes ♥' value={post.likes.length}/>       
                <h3 className={styles.desc}>Description: </h3>
                <p className={styles.description}>{post.description}</p>       
            </div>
    )
}

export default PostDetailsInfo;