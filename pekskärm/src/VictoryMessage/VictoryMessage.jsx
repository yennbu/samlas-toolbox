import React from "react";
import './victoryMessage.css';
import StartBtn from "../StartBtn/StartBtn";

function VictoryMessage({onRestart}) {
    return(
        <section className="victoryBoard">
            <h1>Grattis!</h1>
            <p>Du hittade alla verktyg från stenåldern!</p>
            <StartBtn text={"Spela igen!"} onClick={onRestart} />
        </section>
    );
};

export default VictoryMessage;