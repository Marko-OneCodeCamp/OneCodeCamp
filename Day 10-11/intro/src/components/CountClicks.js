import React from 'react'
import { useState } from 'react';

const CountClicks = () => {
    const [count , setCount] = useState(0);

    const handleClick = () => setCount(prevCount => prevCount + 1);
    const reset = () => setCount(prevCount => prevCount = 0);

    return (
        <div className="container mt-5">
            <h1>Count number of clicks</h1>
            <button onClick={handleClick} className='btn btn-warning mx-2'>Click Me!</button>
            <button onClick={reset} className='btn btn-dark'>Reset!</button>
            <h2>Total number of clicks: {count}</h2>
        </div>

    )
}

export default CountClicks