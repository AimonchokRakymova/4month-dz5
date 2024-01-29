import React from 'react';
import { findAllByDisplayValue } from '@testing-library/react';
import classes from './UsersPage.module.css';


const UsersPage = ({users}) => {
    const isUser= false
    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response=>response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            {users.map(user=>
                <div key={user.id} className={classes.info}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button onClick={()=>getUser(user.id)}>подробнее</button>
                    { isUser &&
                        <div>подробная информация</div>
                    }
                </div>
            )}
        </div>
    );
};

export default UsersPage;