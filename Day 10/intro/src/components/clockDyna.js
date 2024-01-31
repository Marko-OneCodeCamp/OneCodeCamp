import React, { useState, useEffect } from 'react';

const ClockDyna = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
    const updateTime = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
    }, []); 
    const showTime = currentTime.toLocaleTimeString();
    return (
        <div>
            <h1>Dynamic Current Time: {showTime}</h1>
        </div>
    );
};
export default ClockDyna;
