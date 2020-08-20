import React, { useState, useEffect, useContext, useCallback } from 'react';
import styles from './index.module.css';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Context/Context';
import getCookie from '../../utils/getCookie';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Container from '../../components/About-Post/post-details';
import PostDetailsInfo from '../../components/About-Post/post-info';
import SubmitButton from '../../components/button/submit-button';
import LinkButton from '../../components/button/link-button';

const PostDetailsPage = () => {

    const [post, setPost] = useState(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const context = useContext(UserContext);
    const params = useParams();
    const history = useHistory();

    const idString = params.postId;
    const id = idString.replace(':', '');

    const getPost = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/publication/details?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const post = await response.json();

            const postAuthorId = post.author._id;
            const currentUserId = context.user.id;
            const isAuthor = postAuthorId === currentUserId;

            setPost(post);
            setIsAuthor(isAuthor);
        }
    }, [context.user.id, history, id])

    useEffect(() => {
        getPost();
    }, [getPost])


    const handleDelete = async () => {
        const response = await fetch(`http://localhost:9999/api/publication?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        if (!response.ok) {
            history.push('/error');
        } else {
            history.push('/blog')
        }

    }

    if (!post) {
        return (
            <PageLayout>
                <section className={styles['load']}>
                    <div>Loading...</div>
                </section>
            </PageLayout>
        )
    }

    return (

        <PageLayout>
           
                <Container>
                    <Title title={post.title} />
                    <PostDetailsInfo post={post} />
                    {/* {isAuthor ?
                        (<SubmitButton title='Delete Post' onClick={handleDelete} />) :
                        (<SubmitButton title={likeBtnTitle}   />)
                        } */}
                    {isAuthor ? (<LinkButton href={`/blog/update-post/${id}`} title='Edit Post' />) : null}
                </Container>
                

        </PageLayout>
    )
}

export default PostDetailsPage;