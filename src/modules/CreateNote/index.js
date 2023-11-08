import React from "react";
import "./createNote.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

function CreateNote(){
    const {flagOpenModal, setFlagOpenModal}= React.useContext(NoteAppContext);
    const openModal=()=>{
        flagOpenModal || setFlagOpenModal(true);
    }
    return(
        <div onClick={()=>{
            openModal();
        }} className="CreateNoteContainer">+</div>
    );
}
export {CreateNote};