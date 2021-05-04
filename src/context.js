import React, { useContext, useState } from "react";
const TimerContext = React.createContext("");

const TimerProvider = ({ children }) => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    return (
        <TimerContext.Provider value={{ second, minute, hour }}>
            {children}
        </TimerContext.Provider>
    );
};

const useTimerContext = () => {
    return useContext(TimerContext);
};

export { TimerContext, TimerProvider, useTimerContext };
