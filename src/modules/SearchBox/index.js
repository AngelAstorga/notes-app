import React from "react";
import "./searchBox.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function SearchBox(){

    const {search, setSearch} = React.useContext(NoteAppContext);


    return (
        <div className="SearchBoxContainer">
            <input onChange={(e)=>{setSearch(e.target.value)}} className="SearchBoxInput" value={search} type="text" placeholder="search" />
        </div>
    );
}
export {SearchBox};