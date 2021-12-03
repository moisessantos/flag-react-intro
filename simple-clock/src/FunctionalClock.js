import React, { useCallback, useEffect, useState, useRef } from "react";

const FunctionalClock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString()) //time,
    const [isPlaying, setIsPlaying] = useState(props.startPlaying) //isPlaying
    let interval = useRef(null);

    const start = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const stop = useCallback(() => {
        setIsPlaying(false);
    }, []);
    
    useEffect(() => {
        if (isPlaying) {
            interval.current = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
                setIsPlaying(true);
            }, 1000);
        } else {
            clearInterval(interval.current);
        }
        return () => clearInterval(interval.current);
    }, [isPlaying, interval]);

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