import React from "react";
import './speechBubble.css';

function SpeechBubble({text}) {

    return(
        <>
            <div className="speechBubble">
                <p className="speechBubble__text">{text}</p>
            </div>
        </>
    )
};

export default SpeechBubble;