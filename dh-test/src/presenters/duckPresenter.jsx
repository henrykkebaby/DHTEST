import React, {useState, useEffect } from 'react';
import Duck from '../views/duck';
import duckPic from '../localfiles/duck.png';
import backgroundPic1 from '../localfiles/background1.jpg';
import backgroundPic2 from '../localfiles/background2.jpg';
import backgroundPic3 from '../localfiles/background3.jpg';

function DuckPresenter(props) {

    const default_time = 5;
    const pics = [backgroundPic1, backgroundPic2, backgroundPic3];

    const [localTime, setLocalTime] = useState(default_time);
    const [score, setScore] = useState(0);
    const [posX, setPosX] = useState(Math.random()*480);
    const [posY, setPosY] = useState(Math.random()*480);
    const [background, setBackground]= useState(0);

    
    useEffect(() => {props.model.setSeconds(default_time); props.model.addObserver(() => {setLocalTime(props.model.seconds); })}, []);
    useEffect(() => {if(localTime < 0) {increment(-500); generate(); }}, [localTime]);

    function generate() {
      setPosX(Math.random()*480); 
      setPosY(Math.random()*480);
      setBackground((background) => {
        let x = Math.floor(Math.random() * pics.length);
        while(background===x) x = Math.floor(Math.random() * pics.length);
        return x; }        
      )
      props.model.setSeconds(default_time); 
    }

    function increment(point) { setScore(score + point); }

    function foundDuck() { console.log("You found Duck"); increment(1000); generate(); }
    function wrongDuck() { console.log("You didn't find Duck"); increment(-500); }

    return <Duck 
        score={score}
        foundDuck={foundDuck}
        wrongDuck={wrongDuck}
        backgroundPic={pics[background]}
        duckPic={duckPic} 
        posX={posX + "px"}
        posY={posY + "px"}
    />
}

export default DuckPresenter