import React from "react";
import  ReactDOM  from "react-dom";
import { NoteAppContext } from "../../contexts/NoteAppContext";
import "./ModalCreateNote.css";
import { SearchBox } from "../../modules/SearchBox";
import { Tag } from "../../modules/Tag";
import { Button } from "../../modules/Button";

function ModalCreateNote(){
    const {listTags, listNotes, setListNotes}= React.useContext(NoteAppContext);
    const {flagOpenModal,setFlagOpenModal}= React.useContext(NoteAppContext);
    const anchor = document.getElementById("modal");
    const [searchTag, setSearchTag]= React.useState("");
    const [description, setDescription]= React.useState("");
    const [flagNewTagFromItem,setFlagNewTagFromItem]= React.useState(false);
    const [auxListTags, setAuxListTags]= React.useState(JSON.parse(JSON.stringify(listTags)));
    const date= new Date();

    React.useEffect(
        ()=>{
            let aux=JSON.parse(JSON.stringify(listTags));
            aux.forEach((tag)=>{
                tag.status=false;
            });
            setAuxListTags(aux);
        }
        ,[listTags]);

    const [newNote, setNewNote]= React.useState(
        {id: "",
         description:'', 
         tags:[]});
    
    let value=[];
    value=listTags.find((tag)=>{
        return (tag.description == searchTag);
    });

    if(!flagNewTagFromItem){
        if(searchTag != "" && value == undefined){
            setFlagNewTagFromItem(true);
        }
    }else{
        if(searchTag =="" || value != undefined){
            setFlagNewTagFromItem(false);
        }
    }

    const handleCreateNote=()=>{
        if(description.length >0){
            auxListTags.forEach((tag)=>{
                if(tag.status == true){
                    newNote.tags.push({idTag: tag.idTag, description: tag.description});
                }
            });
            newNote.description= description;
            newNote.id=Math.floor(Math.random()*10000)+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+date.getMilliseconds()+Math.floor(Math.random()*10000);
            let auxListNotes= JSON.parse(JSON.stringify(listNotes));
            auxListNotes.push(newNote);
            setListNotes(auxListNotes);
            setNewNote({id: "",
            description:'', 
            tags:[]});
            setFlagOpenModal(false);
            setDescription("");
        }
    }
    return(flagOpenModal && ReactDOM.createPortal(
        <div onClick={
            (e)=>{
                setFlagOpenModal(false);
            }
        } className="ModalCreateNoteContainer">
        <div onClick={(e)=>{
            e.stopPropagation();
        }} className="ModalCreateNoteWrapper">
            <textarea onChange={(e)=>{setDescription(e.target.value)}}  value={description} placeholder="write yor note" className="ModalCrateNote__description">

            </textarea>
            <div className="ModalCreateNote__tagsManager">
                <div className="ModalCreateNote__tagList">
                    {auxListTags.map((tag)=>{
                        return(tag.status && <Tag
                            key={`NewTag${tag.idTag}`}
                            text= {tag.description}
                            type="TagsNewItem"
                            name= {tag.idTag}
                            newNote={newNote}
                            setNewNote={setNewNote}
                            auxListTags={auxListTags}
                            setAuxListTags={setAuxListTags}
                        />)
                    })}
                </div>
                <SearchBox
                type="SearchTagItem"
                text="Search Tag"
                searchTagItem={searchTag} 
                setSearchTagItem={setSearchTag}
                flagNewTagFromItem={flagNewTagFromItem}
                setFlagNewTagFromItem={setFlagNewTagFromItem}
                />
                <div className="ModalCreateNote__tagList ModalCreateNote__tagList--noteAddTags">
                    {auxListTags.map((tag)=>{
                        return (!tag.status 
                        &&  <Tag
                            key={`NewTag${tag.idTag}`}
                            text= {tag.description}
                            type="TagsNewItem"
                            name= {tag.idTag}
                            newNote={newNote}
                            setNewNote={setNewNote}
                            auxListTags={auxListTags}
                            setAuxListTags={setAuxListTags}
                            />)
                    })}
                </div>
            </div>
                <Button text="Create Note" handleOnclick={handleCreateNote}/>
         </div>
        </div>
        ,anchor));
}
export {ModalCreateNote};