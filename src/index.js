import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TimerProvider } from "./context";

ReactDOM.render(
    <TimerProvider>
        <App />
    </TimerProvider>,
    document.getElementById("root")
);
