import React from 'react';
import styles from './submit-button.module.css';

const SubmitButton = ({title, onClick, disabled}) => {
    return (
    <button className={styles.submit} onClick={onClick} disabled={disabled}>{title}</button>
    )
}

export default SubmitButton;