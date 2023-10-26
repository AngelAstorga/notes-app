import React from "react";
import {Icon} from "../Icon";
function FilterIcon({handleFilter}){
    return(
        <span onClick={()=>{handleFilter()}} className="FilterIcon" id="filterIcon">
            <Icon type="FilterImg"/>
        </span>
    )
}
export {FilterIcon};