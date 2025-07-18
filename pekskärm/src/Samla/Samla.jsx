import React from "react";
import Samla from '../assets/Samla-höger.png';
import './samla.css'

function SamlaImg() {

    return(
        <div className="samla">
            <img src={Samla} alt="Fågeln Samla" />
        </div>
    )
};

export default SamlaImg;