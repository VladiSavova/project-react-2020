import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import ErrorMsg from '../../components/error-msg';
import SubmitButton from '../../components/button/submit-button';
import Textarea from '../../components/textarea';
import getCookie from '../../utils/getCookie';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const history = useHistory();
    const params = useParams();

    const id = params.postId;
    
    const getPost = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/publication/details?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const post = await response.json();
            setTitle(post.title);
            setDescription(post.description);
            setImage(post.image || '');
        }
    }, [id, history])

    useEffect(() => {
        getPost()
    }, [getPost])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setErrorMsg('You cannot submit empty Title!');
            return;
        }

        if (!description) {
            setErrorMsg('Please provide description!');
            return;
        }

        await fetch(`http://localhost:9999/api/publication/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                description,
                image
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(res => {
            if (res.status === 400) {
                setErrorMsg('Title and Description are required!');
                return;
            }
            history.push(`/blog/post/${id}`)
        }).catch(e => {
            history.push('/error');
        });
    }

    return (
        <PageLayout>
            <section className={styles.details}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Edit Post' />
                    <Input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Title'
                        id='title'
                        placeholder='Title...'
                    />
                    <Textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='Description'
                        id='description'
                        placeholder='Describe your post...'
                    />
                   <Input
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='image Url'
                        id='image'
                        placeholder='Image Url...'
                    />

                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Edit' />
                </form>
            </section>
        </PageLayout>
    )
}

export default EditPost