import React from "react";
import "./itemList.css";
import {Item} from "../Item";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function ItemList(){
    const {listNotes, search} = React.useContext(NoteAppContext);
    const searchedList= listNotes.filter((note)=>{
        return note.description.includes(search);
    });
    
    return (
        <div className="ItemListContainer">
           {searchedList.map((element)=>{
            return(
            <Item 
                description={element.description} 
                tags={element.tags} 
                id={element.id}
                key={element.id}/>
            );
           })}
        </div>
    );
}
export {ItemList};