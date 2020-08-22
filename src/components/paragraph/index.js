import React from 'react';
import styles from './index.module.css';

const Paragraph = ({label, value}) => {
    return (
        <p  className={styles.par}>
            <span>{label}: {value}</span>
        </p>
    )
}

export default Paragraph;