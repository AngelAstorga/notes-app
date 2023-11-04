import React from "react";
import "./itemList.css";
import {Item} from "../Item";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function ItemList(){
    const {listNotes, search,listTags, flagFilter} = React.useContext(NoteAppContext);
    let searchedList= listNotes.filter((note)=>{
        return note.description.includes(search);
    });

    
    if( flagFilter){
       searchedList= searchedList.filter((element)=>{
            const listItemTags= element.tags;
            let counter=0;
            for(let i=0;i<listItemTags.length;i++){
                for(let j=0;j<listTags.length;j++){

                    if(listTags[j].idTag == listItemTags[i].idTag && listTags[j].status){
                        counter=counter +1;
                        if(counter == listTags.filter((tag)=>{return tag.status}).length){
                            return true;
                        }
                    }
                }   
            }

       });
    }


    return (
        <div className="ItemListContainer">
           {searchedList.map((element)=>{
            return(
            <Item 
                description={element.description} 
                tags={element.tags} 
                id={element.id}
                key={element.id}
                />
            );
           })}
        </div>
    );
}
export {ItemList};