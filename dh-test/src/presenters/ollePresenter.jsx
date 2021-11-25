import React from 'react'
import Olle from '../views/olle'
function OllePresenter(props) {

    const number = props.model.filip + 5;



    return <Olle guest={number} />
}

export default OllePresenter
