import React from "react";
import "./button.css"; 

function Button({text,handleOnclick}){
    return (
        <button onClick={()=>{handleOnclick()}} className="ButtonContainer">
            {text}
        </button>
    );
}
export {Button};