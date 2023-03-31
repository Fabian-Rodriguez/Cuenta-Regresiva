"use client";
import React, { useState, useEffect } from "react";
import './styles.css';

const COUNTDOWN_TARGET = new Date("2023-04-25T23:59:59")

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60);
    const seconds = Math.floor(totalTimeLeft / 1000 % 60);
    return {
        'Days': days,
        'Hours': hours,
        'Minutes': minutes,
        'Seconds': seconds,
    };
}

const countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        setTimeLeft(getTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <div className="countdown">
        <h2></h2>
        <div className="content">
            {Object.entries(timeLeft).map(el => {
                const label = el[0]
                const value = el[1]
                return (
                    <div className="box" key={label}>
                        <div className="value">
                            <span>{value}</span>
                        </div>
                        <span className="label">{label}</span>
                    </div>
                )
            })}
        </div>
    </div>

}

export default countdown;