import React from "react";
import { useTimerContext } from "../../context";
import "./Buttons.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";

function Buttons() {
    const { handleActive, isActive, msecond, handleReset } = useTimerContext();

    return (
        <div className="buttons">
            <IconButton onClick={handleActive}>
                {isActive ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>

            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

export default Buttons;
