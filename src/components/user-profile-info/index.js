import React from 'react';
import styles from './index.module.css';
import Title from '../../components/title';
import LinkButton from '../../components/button/link-button';
import PageLayout from '../../components/page-layout';
import snimka from "../../images/avatar.jpg";

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
            <img  className='image' src={snimka} alt="imageAvatar"/>
            <LinkButton href={`/update-profile/${user._id}`} title='Edit username' />
            <div className={styles.info}>
                <h3>You have: {user.posts.length} posts. </h3>
            </div>
         
        </section>
    )
}

export default UserInfo;