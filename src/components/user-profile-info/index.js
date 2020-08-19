import React from 'react';
import styles from './index.module.css';
import Title from '../../components/title';
import LinkButton from '../../components/button/link-button';
import PageLayout from '../../components/page-layout';

const UserInfo = ({ user }) => {

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
        <section className={styles.details}>
            <h1>Hello, {user.username} !</h1>
            <h3>Here is your profile page.</h3>
            <div className={styles.info}>
                <h2>Username: {user.username}</h2>
                <h3 className={styles.model}>You have: {user.posts.length} posts. </h3>
            </div>
            <LinkButton href={`/update-profile/${user._id}`} title='Update Profile' />
        </section>
    )
}

export default UserInfo;