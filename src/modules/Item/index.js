import React, { useContext } from "react";
import "./item.css";
import { ListTag } from "../ListTag";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { DeleteIcon } from "../Icon/DeleteIcon";
import { NoteAppContext } from "../../contexts/NoteAppContext";
import { TagItemManager } from "../TagItemManager";

function Item(props){
    const {listTags} = React.useContext(NoteAppContext);
    const [description,setDescription] = React.useState(props.description || "" );
    const [flagEdit,setFlagEdit] = React.useState(false);
    const [listTagsAux,setListTagsAux]= React.useState([]);


    React.useEffect(()=>{
        let auxListTags=[];
        let containerList=[];
        if(listTags.length > 0){
            auxListTags=[...listTags];
            auxListTags.map((element)=>{
                let newElement= {idTag: element.idTag, description: element.description, status: false}
                containerList.push(newElement);
            });
        setListTagsAux(containerList);
        }
    },[listTags]);
    


    const onEdit=(e)=>{
        setFlagEdit(flagEdit?false:true);
        const itemText= e.currentTarget.firstChild;

        if(!flagEdit){
                itemText.removeAttribute("readOnly");
                itemText.style.border="1px solid rgba(var(--borderBox),0.7)";
                itemText.style.cursor="text";
            }else{
                itemText.setAttribute("readOnly", true);
                itemText.style.border="none"; 
                itemText.style.cursor="pointer";
            }
        }

    

    return (
        <div onDoubleClick={(e)=>{
            onEdit(e);
        }} className="ItemContainer" >
            <textarea readOnly 
            onChange={(e)=>{
                setDescription(e.target.value);
            }}  
                className="Item__text" 
                name={props.id}  
                value={description} />            
            <TagItemManager listTags={listTagsAux} listTagsAdded={props.tags} flagEdit={flagEdit}/>

            <DeleteIcon 
                noteDelete={flagEdit}/>
            <div id="modalTag">
            </div>
        </div>

    );
}
export {Item};