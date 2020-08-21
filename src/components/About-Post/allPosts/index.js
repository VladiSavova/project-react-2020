import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import Post from '../../About-Post/post';
import Title from '../../title';
import ContainerSection from '../../container/index';

const Posts = ({ userId, title, noPostsMsg }) => {

    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        const promise = await fetch('http://localhost:9999/api/publication');
        const posts = await promise.json();

        if (userId) {
            const currentUserPosts = posts.filter(post => post.author._id === userId);
            setPosts(currentUserPosts);
        } else {
            setPosts(posts);
        }

    }, [userId])

    useEffect(() => {
        getPosts();
    }, [getPosts])

    const renderAllPosts = () => {

        if (posts.length < 1) {
            return (
                <h3>{noPostsMsg}</h3>
            )
        }

        return posts.map(post => {
            return (
                <Post key={post._id} {...post} />
            );
        });
    }

    return (
        <ContainerSection>
            <Title title={title} />
            <div className={styles['posts-container']}>
            {renderAllPosts()}
            </div>
        </ContainerSection>

    )
}

export default Posts;