import React from "react";
import "./item.css";
import { ListTag } from "../ListTag";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { DeleteIcon } from "../Icon/DeleteIcon";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function Item(props){
    const {listNotes, setListNotes} =React.useContext(NoteAppContext);
    const [description,setDescription] = React.useState(props.description || "" );
    const [flagEdit,setFlagEdit] = React.useState(false);

    const updateItem=(e)=>{

    }
    const deleteItem=()=>{

    }
    const onEdit=(e)=>{
        setFlagEdit(flagEdit?false:true);
        const itemText= e.currentTarget.firstChild;

        if(!flagEdit){
                itemText.removeAttribute("readOnly");
                itemText.style.border="1px solid rgba(var(--borderBox),0.7)";
            }else{
                itemText.setAttribute("readOnly", true);
                itemText.style.border="none"; 
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
            <div className="Item__tagContainer">
                <ListTag>
                    { props.tags.map((element)=>{
                        return(
                            <Tag key={element.idTag} text={element.tagDescription} type="description"/>
                        );
                    })
                    }
                </ListTag>
                {flagEdit && 
                    <Button text="Add"/>}
            </div>
            <DeleteIcon 
                noteDelete={flagEdit}/>
            <div id="modalTag">
            </div>
        </div>

    );
}
export {Item};