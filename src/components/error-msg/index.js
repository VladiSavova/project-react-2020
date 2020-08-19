import React from 'react';
import styles from './index.module.css';

const ErrorMsg = ({msg}) => {
    return(
        <h4 className={styles.error}>{msg} </h4>
    )
}

export default ErrorMsg;