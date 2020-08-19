import React, { useState, useEffect, useCallback } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import { useParams, useHistory } from 'react-router-dom';
// import Posts from '../../components/posts';
import UserInfo from '../../components/user-profile-info';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const params = useParams();
    const history = useHistory();

    const id = params.userId;

    const getData = useCallback(async () => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            history.push('/error');
        } else {
            const user = await response.json();
            setUser(user);
            setPosts(user.posts && user.posts.length);
        }
    }, [id, history])

    useEffect(() => {
        getData()
    }, [getData])

    if (!user) {
        return (
            <PageLayout>
                <section className={styles.details}>
                    <Title title='My profile' />
                    <div> Loading...</div>
                </section>
            </PageLayout>
        )
    }

    return (
        
        <PageLayout>
            <UserInfo user={user} />
        </PageLayout>
    )
}

export default ProfilePage;