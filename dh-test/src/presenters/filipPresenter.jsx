import React from 'react'
import Filip from '../views/filip'
function FilipPresenter(props) {

    const number = props.model.filip + 20

    return <Filip number = {number}/>
}

export default FilipPresenter
