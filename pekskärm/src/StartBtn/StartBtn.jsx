import React from "react";
import './startBtn.css'

function StartBtn({ text, onClick }) {
  return (
    <button className="startBtn" onClick={onClick}>
      {text}
    </button>
  );
}

export default StartBtn;