import React from "react";
import "./App.css";
import { useTimerContext } from "./context";
import Inputs from "./components/Inputs/Inputs";
import Timer from "./components/Timer/Timer";
import Buttons from "./components/Buttons/Buttons";

function App() {
    const { total, timerOver } = useTimerContext();

    return (
        <div className="app">
            {timerOver ? <h1 className="time-over">timer over</h1> : <Timer />}
            {/* <Inputs /> */}
            <Buttons />
            <div
                className="app__container"
                style={{ height: `${total}vh` }}
            ></div>
        </div>
    );
}

export default App;
