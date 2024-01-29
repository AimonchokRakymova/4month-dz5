import React from 'react';
import classes from './Modal.module.css';
import Button from '../button/Button';
import Input from '../input/Input';


const Modal = (
    {
        children,
        handleShow,
        onChangeInput,
        handleAdd
    }) => {

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button text={'Закрыть'} action={handleShow}/>
                <Input placeholder={'добавление задачи'} onChangeInput={onChangeInput}/>
                <Button text={'Добавить'} action={handleAdd}/>
                {children}
            </div>
        </>
    );
};

export default Modal;