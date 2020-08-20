import React from 'react';
import error from '../../images/confused.jpg';
import Footer from '../../components/footer';
import styles from './index.module.css';
import Header from '../../components/header';

const ErrorPage = () => {

    return (
        <div className='container'>
           <Header/>
           <h1>Ooopps...</h1>
            <img src={error} alt='error-image' className={styles['error']}/>
            <Footer/>
        </div>
        
    )
}

export default ErrorPage;