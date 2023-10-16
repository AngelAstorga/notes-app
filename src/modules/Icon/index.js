import React from "react";
import {ReactComponent as AddImg} from "../../assets/images/add.svg";
import {ReactComponent as DeleteImg} from "../../assets/images/trash.svg";
import {ReactComponent as FilterImg} from "../../assets/images/filter.svg";

const ListIcons={
    "AddImg":()=>{
                return (<AddImg fill="#000000"/>)
            },
    "DeleteImg":()=>{
                return <DeleteImg fill="#000000"/>
            },
    "FilterImg":()=>{
                return <FilterImg fill="#000000"/>
            },
}


function Icon({type}){
    return (
        <span className="IconContainer">
            {ListIcons[type]()}
        </span>
    );
}
export {Icon};