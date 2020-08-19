import React from 'react';
import styles from './index.module.css';
import {Link} from 'react-router-dom';

const LinkComponent = ({title, href, onClick}) => {
    return (
        <div className={styles['header-list-item']}>
            <Link to={href} className={styles['header-link']} onClick={onClick}>
                {title}
            </Link>
        </div>
    )
}

export default LinkComponent;