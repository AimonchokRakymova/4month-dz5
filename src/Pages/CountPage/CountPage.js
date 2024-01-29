import React, { useState } from 'react';


const CountPage = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        if (count >0) {
            setCount(count-1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    );
};

export default CountPage;
