import { useState } from "react";

let id;

const Timer = () => {
    const [ time, setTime ] = useState(0);

    clearInterval(id)

    id = setInterval(() => {
        setTime(time + 1)
    }, 1000)

    return (
        <div className="Timer">
            <h1>Timer</h1>
            <h3>{time} </h3>
        </div>
    )
}

export default Timer;