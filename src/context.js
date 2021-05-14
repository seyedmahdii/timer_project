import React, { useContext, useState, useRef, useEffect } from "react";
const TimerContext = React.createContext("");

const TimerProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [timerOver, setTimerOver] = useState(true);
    const [second, setSecond] = useState(6);
    const [minute, setMinute] = useState(6);
    const [hour, setHour] = useState(0);
    let timerRef = useRef(null);

    useEffect(() => {
        if (second == 0 && minute == 0 && hour == 0) {
            clearInterval(timerRef.current);
            setTimerOver(true);
            setIsActive(false);
        }
    }, [second]);

    if (second === -1) {
        setSecond(59);
        setMinute((min) => {
            if (min !== 0) {
                return min - 1;
            }
            if (min === 0) {
                if (hour !== 0) {
                    setHour(hour - 1);
                    return 59;
                } else {
                }
            }
        });
    }
    if (minute === -1) {
        setMinute(59);

        setHour((hour) => {
            return hour !== 0 ? hour - 1 : 0;
        });
    }

    const handleActive = () => {
        setIsActive(!isActive);
        if (isActive) {
            clearInterval(timerRef.current);
        } else {
            timerRef.current = setInterval(() => {
                setSecond((second) => {
                    return second - 1;
                });
            }, 1000);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTimerOver(false);
        setIsActive(true);
        handleActive();
    };

    const handleReset = () => {
        setSecond(6);
        setMinute(6);
        setHour(0);
        clearInterval(timerRef.current);
        setTimerOver(true);
        setIsActive(false);
    };

    const numberFormat = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <TimerContext.Provider
            value={{
                second,
                minute,
                hour,
                numberFormat,
                isActive,
                handleActive,
                handleReset,
                timerOver,
                handleSubmit,
                setSecond,
                setMinute,
                setHour,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

const useTimerContext = () => {
    return useContext(TimerContext);
};

export { TimerContext, TimerProvider, useTimerContext };
