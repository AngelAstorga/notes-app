import React from "react";
import {Icon} from "../Icon";

function DeleteIcon({type, noteDelete, handleOnClick}){
    return (
        <span onClick={(e)=>{
            handleOnClick(e);
        }} className="note__deleteIconContainer">
            <Icon type="DeleteImg" noteDelete={noteDelete} />
        </span>

    );
}
export {DeleteIcon};