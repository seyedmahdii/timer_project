import React, { useContext } from "react";
import { useTimerContext } from "../../context";
import "./Buttons.css";

function Buttons() {
    const {
        handleActive,
        isActive,
        msecond,
        handleResetLap,
    } = useTimerContext();

    return (
        <div className="buttons">
            <button type="button" onClick={handleActive}>
                {isActive ? "Pause" : msecond ? "Resume" : "Start"}
            </button>
            <button type="button" onClick={handleResetLap}>
                {isActive ? "Lap" : "Reset"}
            </button>
        </div>
    );
}

export default Buttons;
