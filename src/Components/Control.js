import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

const Control = ({ soundfile, iconChange, handleStart, reset, handleStop, timeOn, myAudio }) => {

    return (
        <div id="controls">
            {iconChange
                ? <div id="start_stop" onClick={!timeOn ? handleStart : handleStop}><FontAwesomeIcon icon={ faPause }></FontAwesomeIcon></div>
                : <div id="start_stop" onClick={timeOn ? handleStop : handleStart}><FontAwesomeIcon icon={ faPlay }></FontAwesomeIcon></div>
            }
            <img id="reset" onClick={reset} src="https://icon-library.com/images/reset-icon-png/reset-icon-png-2.jpg" alt="reset icon" />

            <audio id= "beep" type="audio" src={soundfile} ref={myAudio}>

            </audio>
        </div>
    
    )
}


export default Control;
