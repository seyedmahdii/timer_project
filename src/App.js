import React from "react";
import "./App.css";
import { useTimerContext } from "./context";
import Inputs from "./components/Inputs/Inputs";
import Timer from "./components/Timer/Timer";
import Buttons from "./components/Buttons/Buttons";

function App() {
    return (
        <div className="app">
            <Timer />
            {/* <Inputs />
            <Buttons /> */}
        </div>
    );
}

export default App;
