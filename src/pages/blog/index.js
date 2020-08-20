import React from 'react';
import PageLayout from '../../components/page-layout';
import Posts from '../../components/About-Post/allPosts'

const Blog = () => {

    return (
        <PageLayout>
            <h1>This is all posts in site..</h1>
            <Posts/>
        </PageLayout>
    )
}

export default Blog;