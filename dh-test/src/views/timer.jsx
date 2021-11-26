import React from 'react';

function Timer(props) {
  return (
    <div style={{position:'absolute', top:'550px'}}>
        TIME {props.seconds}s
    </div>
    
  );
}

export default Timer;