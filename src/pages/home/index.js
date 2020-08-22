import React, { useContext } from 'react';
import PageLayout from '../../components/page-layout';
import UserContext from '../../Context/Context'
import styles from './index.module.css';
const HomePage = () => {

const context = useContext(UserContext);
  const { loggedIn } = context;

  if (loggedIn) {
    return (
      <PageLayout>   
          <div className={styles.container1}>
            <div className={styles.a}>
              <h1 className={styles.h1}>Welcome to our journey site, buddy</h1>
              <h2 className={styles.h1}>You can shere with people where you travelled</h2>
            </div>
          </div>
      </PageLayout>

    );

  } else {
    return (
      <PageLayout>
        <div className={styles.container2}>
        <div className={styles.a}>
          <h1 className={styles.h1}>Weclome to our site, here you can see amazing places ...</h1>
          <h2> If you want to share with us where you travell join us</h2>
        </div>
        </div>
      </PageLayout>
    )
  }

}
export default HomePage
