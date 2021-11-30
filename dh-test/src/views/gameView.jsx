import React from 'react';
import { Link } from 'react-router-dom';

function GameView(props) {
  return (
    <div>
        <img style={{position:"absolute", userSelect:"none"}} height="500px" width="500px" src={props.backgroundPic} onClick={() => props.wrongDuck()} />
        <img style={{position:"absolute", top:props.posY, left:props.posX, userSelect:"none"}} height="50px" width="50px" src={props.duckPic} onClick={() => props.foundDuck()}/>
        <p style={{position:"absolute", top:"490px", userSelect:"none"}} >ROUND {props.round}</p>
        <p style={{position:"absolute", top:"520px", userSelect:"none"}} >SCORE {props.ducks}</p>

        <p style={{position:"absolute", top:"620px", userSelect:"none"}} >HIGHSCORE {props.highscore.toString()}</p>
        

        <Link to="/" style={{position:"absolute", top:"600px"}}>
            <button onClick = {props.logout}>
                LOG OUT
            </button>
        </Link>

    </div>
    
  );
}

export default GameView;