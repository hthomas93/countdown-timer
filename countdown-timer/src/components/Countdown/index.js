import React from "react";

let time = new Date().toLocaleString();


function Countdown(props) {
    return (
        <div>
            <h1>Countdown</h1>
            <p>The time is {time}</p>
        </div>
    )
}


export default Countdown;