import React, {useState, useEffect } from 'react';
import GameView from '../views/gameView';
import TimerView from '../views/timerView'
import duckPic from '../localfiles/duck.png';
import backgroundPic1 from '../localfiles/background1.jpg';
import backgroundPic2 from '../localfiles/background2.jpg';
import backgroundPic3 from '../localfiles/background3.jpg';

function GamePresenter(props) {

    const pics = [backgroundPic1, backgroundPic2, backgroundPic3];

    const [highscore, setHighscore] = useState(props.model.highscore);
    const [round, setRound] = useState(1);
    const [number, setNumber] = useState(0);
    const [posX, setPosX] = useState(Math.random()*480);
    const [posY, setPosY] = useState(Math.random()*480);
    const [background, setBackground]= useState(Math.floor(Math.random() * pics.length));

    useEffect(() => { props.model.addObserver(() => {setHighscore(props.model.highscore); console.log("highscore " + props.model.highscore);})}, []);

    function generatePos() { setPosX(Math.random()*480); setPosY(Math.random()*480); }

    function generateBackground(){
      if(round >= 4) {
        props.model.addHighscore(number);
      }

      setBackground((background) => {
      let x = Math.floor(Math.random() * pics.length);
      while(background===x) x = Math.floor(Math.random() * pics.length);
      return x; }
    )}

    //Timer
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
          setInterval(() => {
            setSeconds((seconds) => seconds - 1);
          }, 1000);
      }, []);
    //Timer

    useEffect(() => {
      if(round === 1) {return}; generateBackground(); generatePos(); setSeconds(30); console.log("hej"); if(round >= 4) { setRound(1); setNumber(0); };
    }, [round]);

    useEffect(() => {
      if(seconds < 0)
      {
        decrement(1337);
        setRound(round + 1);
      }
    }, [seconds]);

    function increment(point) { setNumber(number + point); }
    function decrement(point) { setNumber(number - point); }    

    function foundDuck() { console.log("You found Duck"); increment(1000); setRound(round + 1); }
    function wrongDuck() { console.log("You didn't find Duck"); decrement(500);  }

    return <div>
      <GameView 
        ducks={number}
        round={round}
        highscore={highscore}
        dec={decrement} 
        inc={increment}
        foundDuck={foundDuck}
        wrongDuck={wrongDuck}
        backgroundPic={pics[background]}
        duckPic={duckPic} 
        posX={posX + "px"}
        posY={posY + "px"}
      />
      <TimerView
        seconds = {seconds}
      />
    </div>
}

export default GamePresenter