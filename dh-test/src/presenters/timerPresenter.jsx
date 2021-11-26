import React, {useState, useEffect } from 'react';
import Timer from '../views/timer';

function TimerPresenter(props) {

    const [localTime, setLocalTime] = useState(props.model.seconds);

    useEffect(() => {
        setInterval(() => {
            props.model.setSeconds(props.model.seconds - 1); setLocalTime(props.model.seconds);
        }, 1000);
    }, []);

    return <Timer seconds={localTime} />
}

export default TimerPresenter