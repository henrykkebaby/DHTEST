import React from 'react';

function Duck(props) {
  return (
    <div>
        <img style={{position:"absolute"}} height="500px" width="500px" src={props.backgroundPic} onClick={() => props.wrongDuck()} />
        <img style={{position:"absolute", top:props.posY, left:props.posX}} height="50px" width="50px" src={props.duckPic} onClick={() => props.foundDuck()}/>
        <p style={{position:"absolute", top:"500px"}} >SCORE {props.ducks}</p>
        <p style={{position:"absolute", top:"550px"}} >TIME {props.seconds}s</p>
    </div>
    
  );
}

export default Duck;