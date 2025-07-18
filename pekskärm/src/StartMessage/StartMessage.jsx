import React from "react";
import './startMessage.css';
import StartBtn from "../StartBtn/StartBtn";

function StartMessage({onStart}) {
    return (
        <section className="startMesBox">
            <h1>Hjälp Samla att hitta alla verktyg från stenåldern!</h1>
            <div className="startDesc">
                <p>Det har stormat här inatt och alla verktyg har blåst iväg!</p>
                <p>Några av verktygen är från vår tid och några är från stenåldern.</p>
                <p>Kan du hjälpa Samla att hitta alla verktyg som är från stenåldern?</p>
            </div>
            <StartBtn text={"Starta spelet"} onClick={onStart} />
        </section>
    );
};

export default StartMessage;