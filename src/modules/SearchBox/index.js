import React from "react";
import "./searchBox.css";

function SearchBox({children}){
    return (
        <div className="SearchBoxContainer">
            <input className="SearchBoxInput" type="text" placeholder="search" />
            {children}
        </div>
    );
}
export {SearchBox};