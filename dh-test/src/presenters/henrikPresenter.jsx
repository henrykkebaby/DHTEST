import React, {useState} from 'react';
import Henrik from '../views/henrik';

function HenrikPresenter(props) {

    const [number, setNumber] = useState(0);

    function increment() { setNumber(number + 1); }
    function decrement() { setNumber(number - 1); }

    return <Henrik hejo={number} dec={decrement} inc={increment} />
}

export default HenrikPresenter