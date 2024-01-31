import React from 'react';
import classes from './Input.module.css';

const Input = ({type, placeholder, onChangeInput}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChangeInput}
        />
    );
};

export default Input;