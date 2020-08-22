import React from 'react';
import PageLayout from '../../components/page-layout';
import Posts from '../../components/About-Post/allPosts'
import styles from './index.module.css';
import Title from '../../components/title';

const Blog = () => {

    return (
        <PageLayout>
          <div className={styles.container}> 
          <Title title='All Posts' />
            <Posts/>
          </div>
        </PageLayout>
    )
}

export default Blog;