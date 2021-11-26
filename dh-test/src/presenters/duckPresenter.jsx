import React, {useState, useEffect } from 'react';
import Duck from '../views/duck';
import duckPic from '../localfiles/duck.png';
import backgroundPic1 from '../localfiles/background1.jpg';
import backgroundPic2 from '../localfiles/background2.jpg';
import backgroundPic3 from '../localfiles/background3.jpg';

function DuckPresenter(props) {

    const pics = [backgroundPic1, backgroundPic2, backgroundPic3];

    const [number, setNumber] = useState(0);
    const [posX, setPosX] = useState(Math.random()*480);
    const [posY, setPosY] = useState(Math.random()*480);
    const [background, setBackground]= useState(generatePic());
    
    //Timer
    const [seconds, setSeconds] = useState(5);
    useEffect(() => {
          setInterval(() => {
            setSeconds((seconds) => {if(seconds > 0){return seconds - 1}else{return seconds}});
          }, 1000);
      }, []);
    //Timer
    



    
    
   


    function generatePic() { return Math.floor(Math.random() * pics.length); }
    function generatePos() { setPosX(Math.random()*480); setPosY(Math.random()*480); }

    function increment(point) { setNumber(number + point); }
    function decrement(point) { setNumber(number - point); }    

    function foundDuck() { console.log("You found Duck"); increment(1000); setBackground(generatePic()); generatePos(); }
    function wrongDuck() { console.log("You didn't find Duck"); decrement(500); }

    return <Duck 
        ducks={number} 
        dec={decrement} 
        inc={increment}
        foundDuck={foundDuck}
        wrongDuck={wrongDuck}
        backgroundPic={pics[background]}
        duckPic={duckPic} 
        posX={posX + "px"}
        posY={posY + "px"}
        seconds = {seconds}
    />
}

export default DuckPresenter