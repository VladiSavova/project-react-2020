import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Input from '../../components/input';
import { useHistory, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submit-button';


const UpdateProfilePage = () => {
    const [username, setUsername] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const params = useParams();
    const history = useHistory();

    const id = params.userId;

    const getData = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUsername(user.username);
        }
    }, [id, history])

    useEffect(() => {
        getData()
    }, [getData])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !username.match(/^[a-zA-z0-9]{3,}$/)) {
            setErrorMsg('Username must consist only letters and digits and to be atleast 3 charecters long!');
            return;
        }

        await fetch(`http://localhost:9999/api/user/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                username,
            }),
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {

            if (res.status === 400) {
                setErrorMsg('Username must consist only letters and digits and to be atleast 3 charecters long!');
                return;
            }
            history.push(`/profile/${id}`);
        }).catch(e => {
            history.push('/error');
        })

    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Title title='Edit Profile' />
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label='Username'
                        id='username'
                    />
                    
                    <SubmitButton title='Edit' />
                </form>
            </div>
        </PageLayout>
    )

}

export default UpdateProfilePage;