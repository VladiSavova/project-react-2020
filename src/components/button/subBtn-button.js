import React from 'react';
import styles from './sub-button.module.css';

const SubButton = ({title, onClick, disabled}) => {
    return (
    <button className={styles.sub} onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default SubButton;