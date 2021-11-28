import React, {useState, useEffect } from 'react';
import Index from '../views/index';

function IndexPresenter(props) {

    return <Index model={props.model} />
}

export default IndexPresenter