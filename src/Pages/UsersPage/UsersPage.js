import React, {useState} from 'react';
import { findAllByDisplayValue } from '@testing-library/react';
import classes from './UsersPage.module.css';


const UsersPage = ({users}) => {
    const [userInfo, setUserInfo] = useState(null)
    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response=>response.json())
            .then(data => setUserInfo(data))
    }

    return (
        <div>
            {users.map(user=>
                <div key={user.id} className={classes.info}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button onClick={()=>getUser(user.id)}>подробнее</button>
                    { userInfo.id === user.id ?
                        <div>
                            <p>{userInfo.address.street}</p>
                            <p>{userInfo.company.name}</p>
                        </div>
                        : ""
                    }
                </div>
            )}
        </div>
    );
};

export default UsersPage;