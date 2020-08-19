import React from 'react';
import { Link } from 'react-router-dom';
import styles from './link-button.module.css';

const LinkButton = ({href, title}) => {
    return (
        <button className={styles.btn}>
            <Link to={href} className={styles['btn-link']}>{title}</Link>
        </button>
    )
}

export default LinkButton;