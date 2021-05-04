import React, { useContext } from "react";
import "./Timer.css";
import { useTimerContext } from "./../../context";

function Timer() {
    const { hour, minute, second } = useTimerContext();
    return (
        <div className="timer">
            {hour} : {minute} : {second}
        </div>
    );
}

export default Timer;
