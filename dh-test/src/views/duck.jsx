import React from 'react';
import { Link } from 'react-router-dom';

function Duck(props) {
  return (
    <div>
        <img style={{position:"absolute", userSelect:"none"}} height="500px" width="500px" src={props.backgroundPic} onClick={() => props.wrongDuck()} />
        <img style={{position:"absolute", top:props.posY, left:props.posX, userSelect:"none"}} height="20px" width="20px" src={props.duckPic} onClick={() => props.foundDuck()}/>
        <p style={{position:"absolute", top:"500px", userSelect:"none"}} >SCORE {props.ducks}</p>
        <p style={{position:"absolute", top:"550px", userSelect:"none"}} >TIME {props.seconds}s</p>

        <Link to="/" style={{position:"absolute", top:"600px"}}>
            <button>
                LOG OUT
            </button>
        </Link>

    </div>
    
  );
}

export default Duck;