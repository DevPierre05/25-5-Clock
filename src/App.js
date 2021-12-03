
import React, { useEffect, useState, useRef } from "react";
import './App.css';
import LengthSection from "./Components/LengthSection";
import Control from "./Components/Control";
import TimerSection from "./Components/TimerSection";
import soundfile from "./alarm1.wav"


function App() {
  const [timerLabel, setTimerLabel] = useState("Session");
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(sessionTime * 60);
  const [timeOn, setTimeOn] = useState(false);  
  const [iconChange, setIconChange] = useState(false);
  const [color, setColor] = useState('black');
  const myAudio = useRef();
  const context = new AudioContext();


  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  /*useEffect(() => {
    if (timeLeft < 60){
      setColor("red")
    } ;
  },[color, timeLeft]) */

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === "Session"){
        setTimerLabel("Break");
        setTimeLeft(breakTime * 60);
      } else if (timerLabel === "Break"){
        setTimerLabel("Session");
        setTimeLeft(sessionTime * 60);
      }
    }

    let interval = null;
    if (timeOn && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeOn && timeLeft === 0){
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      myAudio.current.play();
      handleSwitch();
    }else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[timerLabel, breakTime, sessionTime, timeLeft, timeOn, myAudio])


  const handleStart = () => {
    context.resume();
    setTimeOn(true);
    setIconChange(!iconChange)
  }

  const handleStop = () => {
    setTimeOn(false);
    setIconChange(!iconChange)
  }

  const reset= () => {
    setBreakTime(5);
    setSessionTime(25);
    setTimeLeft(25 * 60);
    setTimerLabel("Session");
    setTimeOn(false);
    setIconChange(false);
    setColor();
    myAudio.current.pause();
    myAudio.current.currentTime = 0;
    
  }

  const breakIncrement = (prev) => {
    if (!timeOn && breakTime < 60){
      setBreakTime(prev => prev + 1);
    } else{
      return
    } 
  }

  const breakDecrement = () => {
    if (!timeOn && breakTime > 1){
      setBreakTime(prev=> prev - 1);
    } else{
      return
    }
  }

  const sessionIncrement = () => {
    if (!timeOn && sessionTime < 60){
      setSessionTime(prev => prev + 1);
      setTimeLeft((sessionTime + 1) * 60);
    } else{
      return
    }
  }

  const sessionDecrement = () => {
    if (!timeOn && sessionTime > 1){
      setSessionTime(prev=> prev - 1);
      setTimeLeft((sessionTime - 1) * 60);
    } else{
      return
    }
  }
 

  return (
    <>
      <div><h1 id="header">Pomodoro Clock</h1></div>
      <div id="project-container">
        <LengthSection 
          breakTime={breakTime} 
          sessionTime={sessionTime} 
          breakIncrement={breakIncrement} 
          breakDecrement={breakDecrement} 
          sessionIncrement={sessionIncrement} 
          sessionDecrement={sessionDecrement}
        />
        <TimerSection 
          timerLabel={timerLabel}
          minutes={minutes}
          seconds={seconds}
          color= {color}
        />
        <Control 
          handleStop={handleStop} 
          handleStart={handleStart} 
          reset={reset}
          timeOn ={timeOn}
          iconChange={iconChange}
          soundfile={soundfile}
          myAudio={myAudio}
        />       
      </div>
      <footer>
          <p> Designed and Coded by Peter Osei</p>
      </footer>


    </>
    
    
  );
}

export default App;
