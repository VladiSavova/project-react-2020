import React from 'react';
import styles from './index.module.css';
import LinkButton from '../../button/link-button';

const Post = ({ title, image, _id }) => {

    return (
        <div className={styles.post}>
            <div className={styles['img']}>
                <img src={image} style={{ width: '400px', height: '300px' }} alt='img' />
            </div>
            <div className={styles.information}>
                <h3>{title}</h3>
                <LinkButton href={`/blog/post/:${_id}`} title='Details' />
            </div>
        </div>
    )
}

export default Post