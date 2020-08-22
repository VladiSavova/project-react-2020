import React from 'react';
import PageLayout from '../../components/page-layout';
import Posts from '../../components/About-Post/allPosts'
import styles from './index.module.css';

const Blog = () => {

    return (
        <PageLayout>
            <h1 className={styles.h}>All posts...</h1>
            <Posts/>
        </PageLayout>
    )
}

export default Blog;