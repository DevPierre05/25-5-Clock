import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const LengthSection = ({ breakTime, sessionTime, breakIncrement, breakDecrement, sessionIncrement, sessionDecrement }) => {

    return (
        <div id="length-container">
            <div id="break-label">
                <h2>Break Length</h2> 
                <FontAwesomeIcon id="break-increment" onClick={breakIncrement} icon={ faArrowAltCircleUp }></FontAwesomeIcon>
                <span id="break-length">{breakTime}</span>
                <FontAwesomeIcon id="break-decrement" onClick={breakDecrement} icon={ faArrowAltCircleDown }></FontAwesomeIcon>
            </div>
            <div id="session-label">
                <h2>Session Length</h2>
                <FontAwesomeIcon id="session-increment" onClick={sessionIncrement} icon={ faArrowAltCircleUp }></FontAwesomeIcon>
                <span id="session-length">{sessionTime}</span>
                <FontAwesomeIcon id="session-increment" onClick={sessionDecrement} icon={ faArrowAltCircleDown }></FontAwesomeIcon>
            </div>
        </div>

    )
}


export default LengthSection;
