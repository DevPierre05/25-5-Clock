import React from "react";

const TimerSection = ({ color, minutes, seconds, timerLabel}) => {
    return (
        <div id="timer-label" >
            <h2>{timerLabel}</h2>
            <div id="time-left" style= {{color: color}}>
                <span className="minutes" id="minute">{minutes < 10? ("0" + minutes) : minutes}</span>
                <span className="hyphen">:</span>
                <div className="smalltext">Mins</div>
            </div>
            <div id="time-left" style= {{color: color}}>
                <span className="seconds" id="second">{seconds < 10? ("0" + seconds) : seconds}</span>
                <div className="smalltext">Sec</div>
            </div>
        </div>
    )
    
}


export default TimerSection;
