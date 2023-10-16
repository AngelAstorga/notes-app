import React from "react";
import "./icon.css";
import {ReactComponent as AddImg} from "../../assets/images/add.svg";
import {ReactComponent as DeleteImg} from "../../assets/images/trash.svg";
import {ReactComponent as FilterImg} from "../../assets/images/filter.svg";

const ListIcons={
    "AddImg":()=>{
                return (<AddImg fill="#000000"/>)
            },
    "DeleteImg":({noteDelete})=>{
                return <DeleteImg className={` ${noteDelete && "note__deleteIcon"}`}/>
            },
    "FilterImg":()=>{
                return <FilterImg fill="#000000"/>
            },
}


function Icon({type, noteDelete}){
    return (
        <>
            {ListIcons[type]({noteDelete})}
        </>
    );
}
export {Icon};