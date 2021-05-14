import React from "react";
import "./Inputs.css";
import { useTimerContext } from "../../context";

function Inputs() {
    const {
        handleSubmit,
        second,
        minute,
        hour,
        setSecond,
        setMinute,
        setHour,
        timerOver,
    } = useTimerContext();

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <div className="input__container">
                    <div className="input__box">
                        <label htmlFor="second">Sec</label>
                        <input
                            type="number"
                            placeholder="second"
                            name="second"
                            id="second"
                            value={second}
                            min={0}
                            max={59}
                            onChange={(event) => setSecond(event.target.value)}
                        />
                    </div>
                    <div className="input__box">
                        <label htmlFor="minute">Min</label>
                        <input
                            type="number"
                            placeholder="minute"
                            name="minute"
                            id="minute"
                            value={minute}
                            min={0}
                            max={59}
                            onChange={(event) => setMinute(event.target.value)}
                        />
                    </div>
                    <div className="input__box">
                        <label htmlFor="hour">Hour</label>
                        <input
                            type="number"
                            placeholder="hour"
                            name="hour"
                            id="hour"
                            value={hour}
                            min={0}
                            max={12}
                            onChange={(event) => setHour(event.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn"
                    disabled={
                        second !== 0 || minute !== 0 || hour !== 0
                            ? false
                            : true
                    }
                >
                    Start
                </button>
            </form>
        </div>
    );
}

export default Inputs;
