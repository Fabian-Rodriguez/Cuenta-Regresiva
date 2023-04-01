"use client";
import React, { useState, useEffect } from "react";
import './styles.css';

const COUNTDOWN_TARGET = new Date("2023-04-25T12:00:00")

const getTimeLeft = () => {

    const now = new Date();
    const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    const difference = COUNTDOWN_TARGET - nowUTC;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(difference / (1000 * 60) % 60);
    const seconds = Math.floor(difference / 1000 % 60);
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