import React, {useState, useEffect } from 'react';
import Timer from '../views/timer';

function TimerPresenter(props) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    console.log(seconds);

    return <Timer seconds={seconds} />
}

export default TimerPresenter