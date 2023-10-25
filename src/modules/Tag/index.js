import React from "react";
import "./tag.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function Tag({text, name, type}){
    const {listTags,setListTags}= React.useContext(NoteAppContext);
    const manageTag=(e)=>{
        let indexAux=undefined;
        let listTagsAux=[...listTags];
        let element=listTagsAux.find((element,index)=>{
            indexAux= index
            return element.idTag ==  e.target.getAttribute("name")
        });
        if(element.status){
            element.status = false;
        }else{
            element.status = true;
            
        }
        listTagsAux.splice(indexAux,1,element);
        setListTags(listTagsAux);        
    }
    return(
        type =="description"
        ?<span className="TagContainer TagContainer--description">
            {text}
        </span>
        :<span onDoubleClick={(e)=>{manageTag(e)}} className="TagContainer" name= {name}>
            {text}
        </span>

    );
}
export {Tag}