import React from "react";
import "./Timer.css";
import { useTimerContext } from "./../../context";

function Timer() {
    const { hour, minute, second, numberFormat } = useTimerContext();

    return (
        <div className="timer">
            {numberFormat(hour)} : {numberFormat(minute)} :{" "}
            {numberFormat(second)}
        </div>
    );
}

export default Timer;
