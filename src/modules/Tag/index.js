import React from "react";
import "./tag.css";
import { NoteAppContext } from "../../contexts/NoteAppContext";

const TagTypes= {
    "description": ({text})=>{
        return (
            <span className="TagContainer TagContainer--description">
            {text}
            </span>)
         },
    "filter": ({text, name, listTags, setListTags,setSearchTag})=>{ 
                return(
                    <span 
                    onDoubleClick={
                        (e)=>{
                        manageTag({e,listTags,setListTags, setSearchTag})
                    }
                    
                    } 
                    className="TagContainer" 
                    name= {name}>
                    
                    {text}
                    </span>
            )
        },
        
    "TagItemManager": ({text, name, listTags, setListTags, setSearchTag,listNotes, setListNotes})=>{
            return (
                <span 
                    onDoubleClick={
                        (e)=>{
                            e.stopPropagation();
                        manageTagFromItem({e,listTags,setListTags, setSearchTag, listNotes, setListNotes})
                    }
                    
                    } 
                    className="TagContainer" 
                    name= {name}>
                    
                    {text}
                    </span>
                )
        },       
    "TagsNewItem": ({text, name, setNewNote, newNote, auxListTags, setAuxListTags})=>{
            return (
                <span 
                    onDoubleClick={
                        (e)=>{
                            e.stopPropagation();
                        manageTagFromNewNote({e,auxListTags, setAuxListTags})
                    }
                    
                    } 
                    className="TagContainer" 
                    name= {name}>
                    
                    {text}
                    </span>
                )
        },       
    "default": ({})=>{
        return (
                <></>
                )
        }       
}

    const manageTagFromNewNote=({e, auxListTags, setAuxListTags})=>{
        let idTag= e.currentTarget.getAttribute("name");
        let indexTag="";
        let tag=auxListTags.find((tag, index)=>{
            if(idTag == tag.idTag){
                indexTag= index;
                return true;
            }
        });
        const tempList= JSON.parse(JSON.stringify(auxListTags));
        if(tag != undefined && tag.status == true){
            tempList[indexTag].status= false;
            setAuxListTags(tempList);
        }else{
            tempList[indexTag].status= true;
            setAuxListTags(tempList);
        }

    }
    const manageTag=({e,listTags, setListTags, setSearchTag})=>{
        
        let indexAux=undefined;
        let listTagsAux=[...listTags];
        let element=listTagsAux.find((element,index)=>{
            if(element.idTag ==  e.target.getAttribute("name")){
                indexAux= index;
            }
            return element.idTag ==  e.target.getAttribute("name")
        });
        if(element.status){
            element.status = false;
        }else{
            element.status = true;
            setSearchTag("");
            
        }
        listTagsAux.splice(indexAux,1,element);
        setListTags(listTagsAux);        
    }
    const manageTagFromItem=({e,listTags, listNotes, setListNotes})=>{
        let idNote=e.currentTarget.parentNode.parentNode.parentNode.parentNode.firstChild.getAttribute("name");
        let flagAdded= true;
        const auxListNotesMain= JSON.parse(JSON.stringify(listNotes));

        let indexNote=undefined;
        let indexTag= undefined;
        let idTag="";
        let description="";
        let selectedNote="";

        if(idNote==undefined){
            idNote=e.currentTarget.parentNode.parentNode.parentNode.firstChild.getAttribute("name");
            flagAdded= false;
        }

        selectedNote=auxListNotesMain.find((note, index)=>{
            if(note.id == idNote){
                indexNote= index;
            }
            return note.id == idNote;
        });

        if(selectedNote != undefined){
            if(flagAdded){
                selectedNote.tags.map((tag, index)=>{
                    if(tag.tagDescription == e.currentTarget.innerHTML){
                        indexTag= index;
                    }
                    return tag.description == e.currentTarget.innerHTML
                });
            }else{
                listTags.map((tag)=>{
                    if(tag.description == e.currentTarget.innerHTML){
                        idTag= tag.idTag;
                        description= tag.description;

                    }
                });
            }
            
            if(selectedNote != undefined){
                let auxListNotes =[];
                let newNote=[];
                auxListNotes=[...auxListNotesMain];
                newNote= auxListNotes[indexNote];
                if(flagAdded){
                    newNote.tags.splice(indexTag,1);
                    auxListNotes.splice(indexNote,1,newNote);
                    setListNotes(auxListNotes);
                }else{
                    newNote.tags.push({idTag: idTag, tagDescription: description});
                    auxListNotes.splice(indexNote,1,newNote);
                    setListNotes(auxListNotes);
                }
                
            }
        }      
    }
    
function Tag({text, name, type,newNote, setNewNote, setAuxListTags, auxListTags}){
    const {listTags,setListTags, setSearchTag, listNotes, setListNotes}= React.useContext(NoteAppContext);
    if(typeof(type) != "string"){
        type="default"
    }

    return(
        <>
        {TagTypes[type]({text, name, type, listTags, setListTags, setSearchTag, listNotes, setListNotes, newNote,setNewNote,auxListTags,setAuxListTags})}
        </>
    );
}
export {Tag}