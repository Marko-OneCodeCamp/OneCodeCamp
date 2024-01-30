import React, { useState, useEffect } from 'react';

const ClockDyna = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
    }, []); 
    const showTime = currentTime.toLocaleTimeString();
    return (
        <div>
            <h1>Dynamic Current Time: {showTime}</h1>
        </div>
    );
};
export default ClockDyna;
