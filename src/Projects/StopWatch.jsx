import React from 'react'
import { useState, useEffect } from 'react'

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else if (!isRunning) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className='flex flex-col items-center justify-center py-8'>
            <h1 className='text-2xl font-semibold'>Stop Watch</h1>
            <div className='text-xl font-semibold py-4'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className='w-1/3 max-w-sm flex flex-row justify-evenly '>
                <button className='border rounded-lg py-1 px-3.5 hover:scale-105 active:border-blue-400' onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Stop" : "Start"}
            </button>
                {/* {
                    isRunning ? (
                    <button className='border rounded-lg py-1 px-3.5' onClick={() => setIsRunning(false)}>Stop</button>
                        ) : (
                    <button className='border rounded-lg py-1 px-3.5'  onClick={() => setIsRunning(true)}>Start</button>
                    )
                } */}
                <button className='border rounded-lg py-1 px-3 hover:scale-105 active:border-red-400' onClick={() => setTime(0)}>Reset </button>
            </div>

        </div>
    )
}

export default StopWatch