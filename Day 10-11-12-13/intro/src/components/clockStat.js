import React from 'react';
const Clock = () => {
    const curTime = new Date();
    const showTime = curTime.toLocaleTimeString();
    return (
    <div>
        <h1>Current Time is: {showTime}.</h1>
    </div>
    );
};

export default Clock;
