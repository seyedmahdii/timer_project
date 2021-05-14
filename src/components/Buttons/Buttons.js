import React from "react";
import { useTimerContext } from "../../context";
import useStyles from "./styles.js";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

function Buttons() {
    const {
        handleActive,
        isActive,
        handleReset,
        timerOver,
    } = useTimerContext();
    const styles = useStyles();

    return (
        <div className={styles.buttons}>
            <IconButton onClick={handleActive}>
                {isActive ? (
                    <PauseIcon
                        className={styles.handleButtons}
                        style={{ fontSize: 85 }}
                    />
                ) : (
                    <PlayArrowIcon
                        className={styles.handleButtons}
                        style={{ fontSize: 85 }}
                    />
                )}
            </IconButton>

            {timerOver || (
                <IconButton onClick={handleReset}>
                    <CloseIcon
                        className={styles.handleButtons}
                        style={{ fontSize: 85 }}
                    />
                </IconButton>
            )}
        </div>
    );
}

export default Buttons;
