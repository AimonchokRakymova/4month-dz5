import React from 'react';


const User = ({ name,age }) => {
    return (
        <div>
            {`Name ${name}, age ${age}`}
        </div>
    );
};

export default User;