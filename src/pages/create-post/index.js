import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import Textarea from '../../components/textarea';
import ErrorMsg from '../../components/error-msg';
import SubmitButton from '../../components/button/submit-button';
import getCookie from '../../utils/getCookie';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '') {
            setErrorMsg('Please write Title!');
            return;
        }

        if (image === '') {
            setErrorMsg('Please add ImageUrl!');
            return;
        }

        if (description === '') {
            setErrorMsg('Please write Description!');
            return;
        }
      

        await fetch('http://localhost:9999/api/publication', {
            method: 'POST',
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
                setErrorMsg('Requried fields!');
                return;
            }
            history.push('/blog');
        }).catch(e => {
            setErrorMsg('Something went wrong!');
        })
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Create Post' />
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
                     <Input
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                            setErrorMsg(null);
                        }}
                        label='ImageUrl'
                        id='image'
                        placeholder='ImageUrl...'
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
 
                    {errorMsg ? (<ErrorMsg msg={errorMsg} />) : null}
                    <SubmitButton title='Create' />
                </form>
            </div>
        </PageLayout>
    )
}

export default CreatePostPage;