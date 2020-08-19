import React from 'react';
import styles from './index.module.css';

const ContainerSection = (props) => {

    return (
        <section className={styles.container}>
            {props.children}
        </section>
    )
}

export default ContainerSection;