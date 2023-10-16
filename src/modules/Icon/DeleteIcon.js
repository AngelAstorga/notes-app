import React from "react";
import {Icon} from "../Icon";

function DeleteIcon({type, noteDelete}){
    return (
        <span className="note__deleteIconContainer">
            <Icon type="DeleteImg" noteDelete={noteDelete} />
        </span>

    );
}
export {DeleteIcon};