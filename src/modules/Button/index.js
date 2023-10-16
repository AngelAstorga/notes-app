import React from "react";
import "./button.css";

function Button({text}){
    return (
        <button className="ButtonContainer">
            {text}
        </button>
    );
}
export {Button};