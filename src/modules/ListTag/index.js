import React from "react";
import "./listTag.css";

function ListTag({children}){
    return(
        <div className="ContainerListTags">
            {children}
        </div>
    );
}
export {ListTag};