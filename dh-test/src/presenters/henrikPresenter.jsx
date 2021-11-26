import React, {useEffect, useState} from 'react';
import Henrik from '../views/henrik';

function HenrikPresenter(props) {

    const [localTime, setLocalTime] = useState(props.model.henrik);

    useEffect(() => {props.model.addObserver(() => setLocalTime(props.model.seconds))}, []);

    return <Henrik hejo={localTime} />
}

export default HenrikPresenter