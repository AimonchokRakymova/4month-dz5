import React from 'react';


const Button = ({ action, text }) => {
    return (
        <button onClick={action}>{text}</button>
    );
};

export default Button;