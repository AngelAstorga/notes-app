import React from "react";
import "./itemList.css";
import {Item} from "../Item";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function ItemList(){
    const {listNotes} = React.useContext(NoteAppContext);
    return (
        <div className="ItemListContainer">
           {listNotes.map((element)=>{
            return(
            <Item 
                description={element.description} 
                tags={element.tags} 
                key={element.description}/>
            );
           })}
        </div>
    );
}
export {ItemList};