import React, {useState, useEffect } from 'react';
import GameView from '../views/gameView';
import TimerView from '../views/timerView';
import GameSource from "../gameSource";
import backgroundPic1 from '../localfiles/background1.jpg';
import backgroundPic2 from '../localfiles/background2.jpg';
import backgroundPic3 from '../localfiles/background3.jpg';
import duckPic from '../localfiles/duck.png';

//Firebase
import {signOut} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

function GamePresenter(props) {
  
  //locals
  
  //height, width, BackgroundNumber, backgroundPic, localImgResults, 
  let localBackground = [500, 500, Math.floor(Math.random() * 35)]; //change later to length of data
  //let localImgResults = [backgroundPic1, backgroundPic2, backgroundPic3];
  let localDuckPos = [Math.random()*480, Math.random()*480];


  //hooks

  const [duckPosX, setDuckPosX] = useState(localDuckPos[0]);
  const [duckPosY, setDuckPosY] = useState(localDuckPos[1]);

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(props.model.highscore);

  const [searchResults, setSearchResults] = useState(null);

  const [width, setWidth] = useState(localBackground[1]);
  const [height, setHeight] = useState(localBackground[0]);
  const [background, setBackground] = useState(null);

  //useEffect
  useEffect(() => {
    console.log("DuckPresenter Ready!");
    props.model.addObserver(() => { setHighscore(props.model.highscore); });
    GameSource.searchImages("google images").then((data)=>{setSearchResults(data); setBackground(data[0].contentUrl); } );
  }, []);

  // flags[0] = boolean trigger rerender
  function rerender(points, flags) {
    if(flags[0]){

      setDuckPosX(localDuckPos[0]);
      setDuckPosY(localDuckPos[1]);
      setBackground(searchResults[localBackground[2]].contentUrl);
      setSeconds(30);

      if(round >= 3)
      {
        props.model.addHighscore(score + points);
        setRound(1);
        setScore(0);
        return;

      } else { setRound(round + 1); }

    }
    setScore(score + points);
  }

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if(seconds <= 0){rerender(-500, [true]); setSeconds(30); }
      else{rerender(-5, [false]); setSeconds(seconds => seconds - 1); }     
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, score]);

  async function logout(){
    await signOut(auth);
  }

  return <div>
      <GameView 
        score={score}
        round={round}
        highscore={highscore}
        dec={() => console.log("dec")} 
        inc={() => console.log("inc")}
        foundDuck={rerender}
        missedDuck={rerender}
        background={background}
        duckPic={duckPic} 
        posX={duckPosX + "px"}
        posY={duckPosY + "px"}
        height={500 + "px"}
        width={500 + "px"}
        logout = {logout}
    />
    <TimerView
        seconds = {seconds}
      />
  </div>
}

export default GamePresenter