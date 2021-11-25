import React from 'react';

function Henrik(props) {
  return (
    <div>
      <button onClick={() => props.dec()}>-</button>
        Henriiiiiiik {props.hejo}
      <button onClick={() => props.inc()}>+</button>
    </div>
  );
}

export default Henrik;


