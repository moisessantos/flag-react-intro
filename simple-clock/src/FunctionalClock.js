import React, { useCallback, useEffect, useState } from "react";

const FunctionalClock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString()) //time,
    const [isPlaying, setIsPlaying] = useState(props.startPlaying) //isPlaying
    let interval = null;

    function stop() {
        clearInterval(interval);
        setIsPlaying(false);
    }

    const start = useCallback(() => {
        interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setIsPlaying(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            start();
        }
        return clearInterval(interval);
    }, [isPlaying, interval, start]);

    return (
        <div>
            <p>{time}</p>
            <button onClick={stop} disabled={!isPlaying}>Stop</button>
            <button onClick={start} disabled={isPlaying}>Start</button>
            <button onClick={() => {
                if (isPlaying) {
                    stop();
                } else {
                    start();
                }
            }}>Start/Stop</button>
        </div>)
}

export default FunctionalClock;