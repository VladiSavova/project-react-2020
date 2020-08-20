import React from 'react';

const Paragraph = ({label, value}) => {
    return (
        <p>
            <span>{label}: {value}</span>
        </p>
    )
}

export default Paragraph;