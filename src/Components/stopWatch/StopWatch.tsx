import React, { useRef, useState } from 'react'
import { start } from 'repl';

export const StopWatch = () => {
    const [startTime, setStartTime] = useState<number>(0);
    const [now, setNow] = useState<number>(0);
    const intervalRef = useRef<any>(0);
    function handleStart() {
        setStartTime(Date.now());
        console.log("start time ", startTime)
        console.log("now time ", now)

        setNow(Date.now());
        // clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);

        console.log("now time ", now)
        console.log("Interval time ", intervalRef)

    }

    function handleStop() {
        clearInterval(intervalRef.current)
        console.log("Interval time ", intervalRef)

    }
    let secondsPassed: number = 0;
    if (startTime !== 0 && now !== 0) {
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <>
            <div>StopWatch</div>
            <h1>
                Time pass : {secondsPassed.toFixed(3)}
            </h1>
            <button onClick={handleStart} style={{ width: "25%", height: "12vh" }} >start</button>
            <button onClick={handleStop} style={{ width: "25%", height: "12vh" }}>stop</button>


        </>

    )
}

